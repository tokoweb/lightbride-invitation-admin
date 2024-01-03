import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";

import { MuiTelInput } from "mui-tel-input";
import { useForm } from "react-hook-form";

import registerSchema from "@/lib/form-schema/register";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";

import FormControlWrapper from "../form-control-wrapper";

const Form1 = ({ setIndex, defaultValues, setDefaultValues }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
    resolver: useYupValidationResolver(registerSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(({ phone, ...d }) => {
        setDefaultValues((prev) => ({ ...prev, ...d, phone: `+${phone}` }));

        setIndex((prev) => prev + 1);
      })}
    >
      <div className="mb-8 text-center">
        <h1 className="text-primary">Hallo!</h1>
        <p>Hai kak! di isi dulu ya datanya </p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p>Nama Domain / URL Undangan</p>
          <div className="mt-1 flex items-start">
            <div className="h-full rounded-l-md bg-primary p-2 text-white">
              ondangan.id/
            </div>
            <FormControlWrapper
              name={"domain"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  className="!rounded-l-none rounded-r-md"
                  placeholder="akudandia"
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div>
          <p>Nama</p>
          <FormControlWrapper
            name={"name"}
            control={control}
            render={(field) => (
              <TextField
                size="small"
                placeholder="Masukan nama kamu"
                className="mt-1"
                fullWidth
                {...field}
              />
            )}
          />
        </div>

        <div>
          <p>Email</p>
          <FormControlWrapper
            name={"email"}
            control={control}
            render={(field) => (
              <TextField
                type="email"
                size="small"
                placeholder="Masukan email"
                className="mt-1"
                fullWidth
                {...field}
              />
            )}
          />
        </div>

        <div>
          <p>Password</p>
          <FormControlWrapper
            name={"password"}
            control={control}
            render={(field) => (
              <TextField
                type="password"
                size="small"
                placeholder="Minimal 8 karakter"
                className="mt-1"
                fullWidth
                {...field}
              />
            )}
          />
        </div>

        {/* <div>
          <p>Nomor HP / Whatsapp</p>
          <FormControlWrapper
            name={"phone"}
            control={control}
            render={(field) => (
              <MuiTelInput
                size="small"
                className="mt-1"
                fullWidth
                defaultCountry="ID"
                forceCallingCode
                placeholder="Masukan Nomor Hp / Whatsapp"
                {...field}
              />
            )}
          />
        </div> */}
      </div>

      <Grid container spacing={3} className="mt-6">
        <Grid xs>
          <Button fullWidth variant="contained" type="submit">
            Lanjutkan
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form1;
