"use client";

import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { FC } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

interface pageProps {}

interface LoginFormValues {
  email: string;
  password: string;
}

const page: FC<pageProps> = () => {
  const initialValues: LoginFormValues = { email: "", password: "" };

  const borderStyles = "border-2 rounded-lg border-gray-500 px-2 py-2";

  return (
    <div className="border-2 border-black m-10 p-10 grid justify-center">
      <h1 className="text-xl text-center p-5">Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={({ email, password }, actions) => {
          // axios({
          //   method: "post",
          //   url: "http://localhost:5001/login",
          //   data: {
          //     email: email,
          //     password: password,
          //   },
          // })
          //   .then((result) => {
          //     console.log(result);
          //     alert(JSON.stringify("you are logged in", null, 2));
          //   })
          //   .catch((error) => {
          //     console.log(error.response.data);
          //     alert(JSON.stringify(error.response.data.message, null, 2));
          //   });

          const result = signIn("credentials", {
            username: email,
            password: password,
            redirect: true,
            callbackUrl: "/user/dashboard",
          });
          actions.setSubmitting(false);
        }}
      >
        <Form className="gap-10">
          {/* email input lene wala section */}
          <div className=" ">
            <label>Email</label> <br />
            <Field
              id="email"
              name="email"
              placeholder="Email"
              className="outline-none w-full"
              required
            />
          </div>
          <div>
            <label>Password</label> <br />
            <Field
              id="password"
              name="password"
              placeholder="Password"
              className="outline-none w-full"
              type="password"
            />
          </div>
          <button type="submit" className="py-2 px-4 border-2 ">
            Signin
          </button>
        </Form>
      </Formik>

      <p>
        Dont have an account?{" "}
        <Link href="/signup" className="text-blue-600">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default page;
