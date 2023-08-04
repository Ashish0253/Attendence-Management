"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AppBar = () => {
  const { data: session } = useSession();
  // console.log("session", session);

  return (
    <div className="flex justify-around h-16 bg-yellow-400 text-lg">
      <div className="p-4">
        {!session?.user && (
          <Link href="/" className="text-blue-800 font-bold px-4">
            Home
          </Link>
        )}
        <Link href="/user/dashboard" className="text-blue-800 font-bold px-4">
          Dashboard
        </Link>
        <Link className="text-blue-800 font-bold px-4" href="/user/profile">
          Profile
        </Link>
      </div>
      <div>
        {session?.user ? (
          <div className="flex">
            <p className="px-2 py-4">{session.user.name}</p>
            <button
              className="border-2 border-transparent bg-blue-600 px-2 py-1 rounded-lg text-white m-4"
              onClick={() => signOut()}
            >
              Signout
            </button>
          </div>
        ) : (
          <>
            <button
              className="border-2 border-transparent bg-blue-600 px-2 py-1 rounded-lg text-white m-4"
              onClick={() => signIn()}
            >
              SignIn
            </button>
            <button className="border-2 border-transparent bg-blue-600 px-2 py-1 rounded-lg text-white m-4">
              <Link href="/signup">Signup</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AppBar;
