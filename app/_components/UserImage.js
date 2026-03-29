import { auth } from "../_lib/auth";

async function UserImage() {
  const session = await auth();
  if (!session?.user?.image) {
    return null;
  }
  return (
    <img
      className="h-8 rounded-full"
      src={session.user.image}
      alt={session.user.name}
      referrerPolicy="no-referrer"
    />
  );
}

export default UserImage;
