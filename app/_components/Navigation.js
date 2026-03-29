import Link from "next/link";
import UserImage from "./UserImage";
import { Suspense } from "react";
import SpinnerMini from "./SpinnerMini";

export default async function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            <Suspense fallback={<SpinnerMini />}>
              <UserImage />
            </Suspense>
            <span>Guest Area</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
