"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data: session } = useSession();
  return (
    <>
      <div>
        This is dashboard page only logged in user are authorised to be here{" "}
      </div>
      <div>
        {session?.user ? (
          <>
            <p className="font-bold text-lg text-blue-700">
              {session.user.name}
            </p>
            <button
              onClick={() => signOut()}
              className="border-2 border-transparent bg-blue-600 px-2 py-1 rounded-lg text-white m-4"
            >
              Signout
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn()}
            className="border-2 border-transparent bg-blue-600 px-2 py-1 rounded-lg text-white m-4"
          >
            Signin to krle
          </button>
        )}
      </div>
    </>
  );
};

export default page;
