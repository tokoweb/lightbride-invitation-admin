"use client";

import { useEffect } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";

import { appName } from "@/constant";
import websiteSettingSchema from "@/lib/form-schema/website-setting";
import useFormApiHandler from "@/lib/hooks/services/useFormApiHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import useFormDefaultValue from "@/lib/hooks/utils/useFormDefaultValue";
import {
  useGetSettingQuery,
  useUpdateSettingMutation,
} from "@/redux/services/settings-api";

import FormControlWrapper from "../form-control-wrapper";

const SettingForm = () => {
  const [fetch, { data, isLoading }] = useFormApiHandler(
    useGetSettingQuery,
    useUpdateSettingMutation,
  );

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: data ?? {
      domain: "",
      token_wa: "",
    },
    resolver: useYupValidationResolver(websiteSettingSchema),
  });

  useFormDefaultValue(data, setValue);

  return (
    <Paper className="w-full p-4">
      <form
        onSubmit={handleSubmit((d) => {
          fetch(new URLSearchParams(d));
        })}
      >
        <h3 className="form-title">Pengaturan Undangan</h3>
        <div className="form-container">
          <div>
            <p>Nama Domain / URL Undangan</p>
            <div className="flex items-start">
              <div className="h-full rounded-l-md bg-primary p-2 text-white">
                {appName}/
              </div>
              <FormControlWrapper
                name={"domain"}
                control={control}
                render={(field) => (
                  <TextField
                    size="small"
                    placeholder="akudandia"
                    fullWidth
                    {...field}
                  />
                )}
              />
            </div>
          </div>

          <div>
            <p>Token Whatsapp Gateway</p>

            <FormControlWrapper
              name={"token_wa"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan token whatsapp gateway"
                  fullWidth
                  {...field}
                />
              )}
            />
            <i className="text-slate-500">
              Kosongkan jika tidak memiliki token whatsapp gateway atau{" "}
              <a
                href="https://nusagateway.com/"
                target="_blank"
                className="text-primary"
              >
                klik disini
              </a>
            </i>
          </div>

          <div className="flex justify-end">
            <LoadingButton
              loading={isLoading}
              variant="contained"
              type="submit"
            >
              Simpan
            </LoadingButton>
          </div>
        </div>
      </form>
    </Paper>
  );
};

export default SettingForm;
