"use client";

import { useEffect } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import { useForm } from "react-hook-form";

import greetingsSchema from "@/lib/form-schema/greetings";
import useFormApiHandler from "@/lib/hooks/services/useFormApiHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import useFormDefaultValue from "@/lib/hooks/utils/useFormDefaultValue";
import {
  useGetGreetingQuery,
  useUpdateGreetingMutation,
} from "@/redux/services/settings-api";

import FormControlWrapper from "../form-control-wrapper";

const GreetingsForm = () => {
  const [fetcher, { data, isLoading }] = useFormApiHandler(
    useGetGreetingQuery,
    useUpdateGreetingMutation,
  );

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: data ?? {
      greeting: "",
      greeting_wa_over: "",
      greeting_wa_under: "",
    },
    resolver: useYupValidationResolver(greetingsSchema),
  });

  useFormDefaultValue(data, setValue);

  return (
    <Paper className="h-fit w-full rounded-md p-4">
      <form
        onSubmit={handleSubmit((d) => {
          fetcher(new URLSearchParams(d));
        })}
      >
        <h3 className="form-title">Salam Pembuka</h3>
        <div className="form-container">
          <div>
            <p>Salam pembuka undangan</p>
            <FormControlWrapper
              name={"greeting"}
              control={control}
              render={({ error, helperText, ...field }) => (
                <>
                  <TextareaAutosize
                    minRows={3}
                    placeholder="Masukan salam pembuka undangan..."
                    className={error ? "error" : ""}
                    {...field}
                  />
                  {error && (
                    <FormHelperText error={error}>{helperText}</FormHelperText>
                  )}
                </>
              )}
            />
          </div>

          <div>
            <p>Salam pembuka whatsapp (atas)</p>
            <FormControlWrapper
              name={"greeting_wa_over"}
              control={control}
              render={({ error, helperText, ...field }) => (
                <>
                  <TextareaAutosize
                    minRows={3}
                    placeholder="Masukan salam pembuka whatsapp (atas)..."
                    className={error ? "error" : ""}
                    {...field}
                  />
                  {error && (
                    <FormHelperText error={error}>{helperText}</FormHelperText>
                  )}
                </>
              )}
            />
          </div>

          <div>
            <p>Salam pembuka whatsapp (bawah)</p>
            <FormControlWrapper
              name={"greeting_wa_under"}
              control={control}
              render={({ error, helperText, ...field }) => (
                <>
                  <TextareaAutosize
                    minRows={3}
                    placeholder="Masukan salam pembuka whatsapp (bawah)..."
                    className={error ? "error" : ""}
                    {...field}
                  />
                  {error && (
                    <FormHelperText error={error}>{helperText}</FormHelperText>
                  )}
                </>
              )}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <LoadingButton loading={isLoading} variant="contained" type="submit">
            Simpan
          </LoadingButton>
        </div>
      </form>
    </Paper>
  );
};

export default GreetingsForm;
