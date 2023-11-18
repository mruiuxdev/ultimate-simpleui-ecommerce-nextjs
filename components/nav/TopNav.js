"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const TopNav = () => {
  const { data, status } = useSession();

  console.log(data);

  return (
    <nav className="nav shadow-sm p-2 justify-content-between align-items-center mb-3">
      <Link href="/">🛒 E-Nextjs</Link>

      {status === "authenticated" ? (
        <div className="d-flex gap-2">
          <Link
            href={`/dashboard/${
              data?.user?.role === "admin" ? "admin" : "user"
            }`}
            className="nav-link"
          >
            {data?.user?.name.slice(0, 10)}... ({data?.user?.role})
          </Link>
          <a
            className="nav-link pointer"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            Logout
          </a>
        </div>
      ) : status === "loading" ? (
        <a className="nav-link text-danger">Loading...</a>
      ) : (
        <div className="d-flex gap-2">
          <Link href="/login" className="nav-link">
            Login
          </Link>
          <Link href="/register" className="nav-link">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
