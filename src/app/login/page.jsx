import { Paper, Button, TextField } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-[url('/img/hero-bg.png')] bg-cover">
      <Paper className="w-96 rounded-xl p-6">
        <form>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                width={140}
                height={140}
                alt="wedding invitation logo"
                src={"/img/logo-lb-01-1.png"}
                className="m-auto"
              />
            </div>
            <TextField required label="Email" className="text-primary" />
            <TextField required label="Password" />
          </div>
          <div className="pt-4">
            <Button
              type="submit"
              variant="contained"
              className="w-full bg-primary !p-4 hover:bg-primary-dark"
            >
              Sign In
            </Button>
            <p variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link href={"/register"} className="ml-1 font-bold">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </Paper>
    </main>
  );
};

export default Login;
