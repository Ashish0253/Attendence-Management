import axios from "axios";

export async function signMeUp(
  name: string,
  rollNumber: string,
  email: string,
  password: string
) {
  const suffix: string = "/api/users";
  console.log("posting to -> ", process.env.NEXT_PUBLIC_SERVER_NAME + suffix);

  try {
    return await axios({
      method: "post",
      url: process.env.NEXT_PUBLIC_SERVER_NAME + suffix,
      data: {
        name: name,
        rollNumber: rollNumber,
        email: email,
        password: password,
      },
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}
