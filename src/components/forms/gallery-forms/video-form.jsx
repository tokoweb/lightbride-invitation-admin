"use client";

import { useEffect } from "react";

import Link from "next/link";

import LoadingButton from "@mui/lab/LoadingButton";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import clsx from "clsx";
import { useForm } from "react-hook-form";

import videoSchema from "@/lib/form-schema/video";
import useFormApiHandler from "@/lib/hooks/services/useFormApiHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import {
  useGetVideoQuery,
  useUpdateVideoMutation,
} from "@/redux/services/gallery-api";

import FormControlWrapper from "../form-control-wrapper";

const VideoForm = () => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      video: "",
    },
    resolver: useYupValidationResolver(videoSchema),
  });

  const [fetcher, { data, isLoading }] = useFormApiHandler(
    useGetVideoQuery,
    useUpdateVideoMutation,
  );

  useEffect(() => {
    if (data) setValue("video", data.video);
  }, [data]);

  return (
    <Paper className="p-4 w-full h-fit">
      <form
        onSubmit={handleSubmit((d) => {
          fetcher(new URLSearchParams(d));
        })}
      >
        <h3 className="form-title">Data Video</h3>
        <div>
          <p>Link youtube</p>
          <FormControlWrapper
            control={control}
            name={`video`}
            render={({ helperText, error, ...field }) => (
              <>
                <TextareaAutosize
                  minRows={3}
                  placeholder="Masukan link video youtube"
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
          <Link href={"/youtube"} className="text-sm text-blue-500 underline">
            Cara menambah video
          </Link>
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

export default VideoForm;
