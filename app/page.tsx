import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello Vishu
      <button className="border-2 border-transparent bg-blue-600 px-2 py-1 rounded-lg text-white m-4">
        <Link href={"/user/dashboard"}>Dashboard</Link>
      </button>
      <div className="">
        <button className="border-2 border-transparent bg-blue-600 px-2 py-1 rounded-lg text-white m-4">
          <Link href={"/login"}>Signin</Link>
        </button>
        <button className="border-2 border-transparent bg-blue-600 px-2 py-1 rounded-lg text-white m-4">
          <Link href={"/signup"}>Signup</Link>
        </button>
      </div>
    </main>
  );
}
