"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";

import clsx from "clsx";
import { useForm } from "react-hook-form";

import faqSchema from "@/lib/form-schema/faq";
import updateProfileSchema from "@/lib/form-schema/update-profile";
import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import useFormDefaultValue from "@/lib/hooks/utils/useFormDefaultValue";
import {
  useUpdateProfileMutation,
  useWhoIAmQuery,
} from "@/redux/services/auth-api";
import {
  useCreateFaqMutation,
  useUpdateFaqMutation,
} from "@/redux/services/faq";

import FormControlWrapper from "../form-control-wrapper";

const FaqForm = ({ defaultValues }) => {
  const router = useRouter();
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      answer: defaultValues?.answer || "",
      question: defaultValues?.question || "",
    },
    resolver: useYupValidationResolver(faqSchema),
  });

  const [fetch, { isLoading }] = useMutationHandler(
    defaultValues ? useUpdateFaqMutation : useCreateFaqMutation,
    {
      success: "Profile berhasil diubah!",
    },
    () => router.push("/admin/faq"),
  );

  useFormDefaultValue(defaultValues, setValue);

  return (
    <Paper className="h-fit w-full rounded-md p-6">
      <form
        onSubmit={handleSubmit((d) => {
          if (defaultValues) {
            fetch({ id: defaultValues.id, data: d });
          } else {
            fetch(d);
          }
        })}
      >
        <div className="flex flex-col gap-4">
          <div>
            <p>Pertanyaan</p>
            <FormControlWrapper
              control={control}
              name={"question"}
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

          <div className="mt-4">
            <p>Jawaban</p>
            <FormControlWrapper
              control={control}
              name={`answer`}
              render={({ helperText, error, ...field }) => (
                <>
                  <TextareaAutosize
                    minRows={3}
                    placeholder="Alamat"
                    className={clsx(
                      `mt-1 w-full rounded-md border border-gray-300 p-2`,
                      { error: error },
                    )}
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
          <LoadingButton type="submit" loading={isLoading} variant="contained">
            Simpan
          </LoadingButton>
        </div>
      </form>
    </Paper>
  );
};

export default FaqForm;
