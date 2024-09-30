"use client";

import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid items-center justify-center my-20 max-w-screen-xl  mx-auto text-center">
      <h1 className="font-bold text-center my-2 text-5xl">Login</h1>
      <p className="mb-5 text-center">Enter your email and password to login</p>
      <div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            isRequired
            type="email"
            label="Email"
            className="max-w-xs"
            errorMessage="Please enter a valid email"
            {...register("email")}
          />
          <Input
            isRequired
            type="password"
            label="Password"
            className="max-w-xs"
            errorMessage="Incorrect password"
            {...register("password")}
          />
          <Button
            className="mt-4"
            color="primary"
            variant="shadow"
            type="submit"
          >
            Login
          </Button>
        </form>
        <Divider className="my-4" />
        <div>
          <h1 className="my-2">Don't have any account?</h1>
          <Link href={"/register"}>
            <Button color="primary" variant="light">
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
