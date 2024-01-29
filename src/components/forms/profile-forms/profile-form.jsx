"use client";

import { useEffect } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";

import updateProfileSchema from "@/lib/form-schema/update-profile";
import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import useFormDefaultValue from "@/lib/hooks/utils/useFormDefaultValue";
import {
  useUpdateProfileMutation,
  useWhoIAmQuery,
} from "@/redux/services/auth-api";

import FormControlWrapper from "../form-control-wrapper";

const ProfileForm = () => {
  const { control, handleSubmit, setValue } = useForm({
    resolver: useYupValidationResolver(updateProfileSchema),
  });

  const { data } = useWhoIAmQuery();

  const [update, { isLoading }] = useMutationHandler(useUpdateProfileMutation, {
    success: "Profile berhasil diubah!",
  });

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("fullname", data.fullname);
    }
  }, [data]);

  return (
    <form
      onSubmit={handleSubmit((d) => {
        update(d);
      })}
    >
      <h4 className="form-header">Profil Pengguna</h4>
      <div className="flex flex-col gap-4">
        <div>
          <p>Nama</p>
          <FormControlWrapper
            control={control}
            name={"name"}
            render={(field) => (
              <TextField
                size="small"
                name="url"
                fullWidth
                placeholder="Masukan nama"
                {...field}
              />
            )}
          />
        </div>
        <div>
          <p>Nama Lengkap</p>
          <FormControlWrapper
            control={control}
            name={"fullname"}
            render={(field) => (
              <TextField
                size="small"
                name="url"
                fullWidth
                placeholder="Masukan nama lengkap"
                {...field}
              />
            )}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <FormControlWrapper
            control={control}
            name={"password"}
            render={(field) => (
              <TextField
                size="small"
                name="url"
                type="password"
                fullWidth
                placeholder="Masukan password"
                {...field}
              />
            )}
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <LoadingButton type="submit" loading={isLoading} variant="contained">
          Simpan
        </LoadingButton>
      </div>
    </form>
  );
};

export default ProfileForm;
