"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuestAction(formData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be signed in to update your profile");
  }
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Invalid national ID number");
  }

  const updateData = {
    nationality,
    countryFlag,
    nationalID,
  };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");
}

export async function deleteReservationAction(bookingId) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be signed in to delete a reservation");
  }

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  console.log(bookingId);
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You do not have permission to delete this reservation");
  }
  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function updateReservationAction(formData) {
  const updatedFields = {
    numGuests: formData.get("numGuests"),
    observations: formData.get("observations").slice(0, 1000),
  };
  const id = formData.get("id");

  // Validate ID to prevent SQL injection
  if (!/^\d+$/.test(id)) {
    throw new Error("Invalid ID");
  }
  const numericId = parseInt(id, 10);

  const session = await auth();
  if (!session) {
    throw new Error("You must be signed in to update a reservation");
  }

  const userBookings = await getBookings(session.user.guestId);
  const userBookingsIds = userBookings.map((booking) => booking.id);
  if (!userBookingsIds.includes(numericId)) {
    throw new Error("You do not have permission to update this reservation");
  }

  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", numericId)
    .select()
    .single();
  console.log(formData);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  redirect("/account/reservations");
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be signed in to delete a reservation");
  }

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: +formData.get("numGuests"),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase
    .from("bookings")
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }
  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}
