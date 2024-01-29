"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import tinymce from "tinymce/tinymce";
import { useForm } from "react-hook-form";

import FullTextEditor from "@/components/ui/full-text-editor";
import articleSchema from "@/lib/form-schema/artikel";
import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import useFormDefaultValue from "@/lib/hooks/utils/useFormDefaultValue";
import { buildFormData } from "@/lib/utils/formData";
import {
  useCreateArticleMutation,
  useUpdateArticleMutation,
} from "@/redux/services/articles-api";

import FormControlWrapper from "../form-control-wrapper";
import ImageCropper from "../image-crop";

// const FullTextEditor = dynamic(
//   () => import("@/components/ui/full-text-editor"),
//   { ssr: false },
// );

const ArticleForm = ({ defaultValues }) => {
  const router = useRouter();
  const editorRef = useRef(null);
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: defaultValues?.title || "",
      image: defaultValues?.image || "",
      content: "",
    },
    resolver: useYupValidationResolver(articleSchema),
  });

  const [fetch, { isLoading }] = useMutationHandler(
    defaultValues ? useUpdateArticleMutation : useCreateArticleMutation,
    {
      success: "Berhasil menyimpan artikel",
    },
    () => router.push("/admin/artikel"),
  );

  useFormDefaultValue(
    defaultValues
      ? { title: defaultValues.title, image: defaultValues.image }
      : null,
    setValue,
  );

  return (
    <>
      <Paper className="h-fit w-full rounded-md p-6">
        <form
          onSubmit={handleSubmit((d) => {
            d = {
              ...d,
              content: editorRef.current.getContent(),
            };

            if (defaultValues) {
              fetch({ id: defaultValues.id, data: buildFormData(d) });
            } else {
              fetch(buildFormData(d));
            }
          })}
          className="flex flex-col gap-4"
        >
          <div>
            <p>Cover Artikel</p>
            <div className="rounded-lg bg-gray-100 p-4">
              <FormControlWrapper
                name={"image"}
                control={control}
                render={({ error, helperText, value }) => (
                  <>
                    <ImageCropper
                      setResult={(res) =>
                        setValue("image", res, { shouldValidate: true })
                      }
                      aspectRatio={16 / 9}
                      imageClassName={"aspect-w-16 aspect-h-9"}
                      imgPreview={value}
                      className={"max-w-2xl"}
                    />
                    {error && (
                      <FormHelperText error={error}>
                        {helperText}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div>
            <p>Judul Artikel</p>
            <FormControlWrapper
              name={"title"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan judul artikel"
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Konten Artikel</p>
            <FullTextEditor
              ref={editorRef}
              initialValue={defaultValues?.content || ""}
            />
          </div>

          <div className="mt-4 flex w-full justify-end">
            <LoadingButton
              loading={isLoading}
              type="submit"
              variant="contained"
            >
              Simpan
            </LoadingButton>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default ArticleForm;
