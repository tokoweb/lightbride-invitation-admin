"use client";

import logo from "@public/img/logo.svg";

import Image from "next/image";

import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";

import loginSchema from "@lib/form-schema/login";
import useLogin from "@lib/hooks/services/auth/useLogin";
import useYupValidationResolver from "@lib/hooks/useYupValidationResolver";
import FormControlWrapper from "@/components/forms/form-control-wrapper";

const Login = () => {
  const [login, { isLoading, errMessage }] = useLogin();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: useYupValidationResolver(loginSchema),
  });

  return (
    <>
      {/* <Navbar /> */}
      <main className="flex min-h-screen w-screen items-center justify-center">
        <form
          onSubmit={handleSubmit((d) => {
            login(d);
          })}
          className="w-full max-w-[500px] px-8"
        >
          <div className="flex flex-col gap-4">
            <Image
              width={64}
              alt="ondangan.id logo"
              src={logo}
              className="m-auto"
            />
            <h1 className="">Masuk</h1>
            <p>Masukan email dan password untuk masuk ke dashboard</p>
            <FormControlWrapper
              name="email"
              control={control}
              render={(field) => (
                <TextField
                  label="Email"
                  placeholder="email@mail.com"
                  {...field}
                />
              )}
            />
            <FormControlWrapper
              name="password"
              control={control}
              render={(field) => (
                <TextField
                  label="Password"
                  type="password"
                  placeholder="********"
                  {...field}
                />
              )}
            />
          </div>
          {errMessage && (
            <Alert severity="error" className="mt-4">
              {errMessage}
            </Alert>
          )}
          <div className="pt-4">
            <LoadingButton
              type="submit"
              variant="contained"
              loading={isLoading}
              className="w-full !p-4"
            >
              Sign In
            </LoadingButton>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
