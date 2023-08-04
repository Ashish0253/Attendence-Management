// "use client";

import axios from "axios";

type Response = {
  id: number;
  name: string;
  full_name: string;
};

const page = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const data: Response = await res.json();
  console.log(data);
  return <div>{data.full_name}</div>;
};

export default page;
