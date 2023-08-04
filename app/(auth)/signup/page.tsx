"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { FC } from "react";
import * as schemas from "../../util/schema";
import { signMeUp } from "@/app/util/server";

interface pageProps {}

interface SignupFormValues {
  name: string;
  rollNumber: string;
  email: string;
  password: string;
}

const page: FC<pageProps> = () => {
  const initialValues: SignupFormValues = {
    name: "",
    rollNumber: "",
    email: "",
    password: "",
  };

  const borderStyles = "border-2 rounded-lg border-gray-500 px-2 py-2";

  return (
    <div className="border-2 border-black m-10 p-10 grid justify-center">
      <h1 className="text-xl text-center p-5">Signup</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async ({ name, rollNumber, email, password }, actions) => {
          const signMeUpRes = await signMeUp(name, rollNumber, email, password);
          console.log(signMeUpRes);
          alert(signMeUpRes?.data ?? "Nahi horha signup");
          actions.setSubmitting(false);
        }}
        validationSchema={schemas.createUserSchema}
      >
        <Form className="gap-10">
          <div className=" ">
            <label>Name</label> <br />
            <Field
              id="name"
              name="name"
              placeholder="Name"
              className="outline-none w-full"
              required
            />
            <ErrorMessage name="name" className="text-red font-bold" />
          </div>
          <div>
            <label>Roll No.</label> <br />
            <Field
              id="rollNumber"
              name="rollNumber"
              placeholder="Roll Number"
              className="outline-none w-full"
              required
            />
            <ErrorMessage name="rollNumber" className="text-red font-bold" />
          </div>
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
            <ErrorMessage name="email" className="text-red font-bold" />
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
            <ErrorMessage name="password" className="text-red font-bold" />
          </div>
          <button type="submit" className="py-2 px-4 border-2">
            Signup
          </button>
        </Form>
      </Formik>

      <p>
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600">
          Login
        </Link>
      </p>
    </div>
  );
};

export default page;
