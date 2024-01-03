"use client";

import { useEffect } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";

import testimonialSchema from "@/lib/form-schema/testimonial";
import useFormApiHandler from "@/lib/hooks/services/useFormApiHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import {
  useGetTestimonialQuery,
  useUpdateTestimonialMutation,
} from "@/redux/services/testimonial-api";

import FormControlWrapper from "../form-control-wrapper";

const TestimonialForm = () => {
  const [fetcher, { data, isLoading }] = useFormApiHandler(
    useGetTestimonialQuery,
    useUpdateTestimonialMutation,
  );

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      address: "",
      review: "",
    },
    resolver: useYupValidationResolver(testimonialSchema),
  });

  useEffect(() => {
    if (!data) return;

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        setValue(key, data[key] ?? "");
      }
    }
  }, [data]);

  return (
    <Paper className="h-fit w-full rounded-md p-4 lg:w-2/3 xl:w-1/2">
      <form
        onSubmit={handleSubmit((d) => {
          fetcher(new URLSearchParams(d));
        })}
      >
        <h3 className="form-title">Testimonial</h3>
        <div className="form-container">
          <div>
            <p>Alamat</p>
            <FormControlWrapper
              name={"address"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Masukan nama lengkap"
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <p>Ulasan</p>
            <FormControlWrapper
              name={"review"}
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

export default TestimonialForm;
