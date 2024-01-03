"use client";

import { useEffect } from "react";

import Link from "next/link";

import LoadingButton from "@mui/lab/LoadingButton";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import clsx from "clsx";
import { useForm } from "react-hook-form";

import mapSchema from "@/lib/form-schema/map";
import useFormApiHandler from "@/lib/hooks/services/useFormApiHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import { getIframeSrc } from "@/lib/utils";
import {
  useGetMapQuery,
  useUpdateMapMutation,
} from "@/redux/services/events-api";

import FormControlWrapper from "../form-control-wrapper";

const MapsForm = () => {
  const [fetcher, { data, isLoading }] = useFormApiHandler(
    useGetMapQuery,
    useUpdateMapMutation,
  );

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      map: "",
    },
    resolver: useYupValidationResolver(mapSchema),
  });

  useEffect(() => {
    console.log(data);

    if (data) setValue("map", data.map);
  }, [data]);

  return (
    <Paper className="p-4">
      <form
        onSubmit={handleSubmit((d) => {
          fetcher(new URLSearchParams(d));
        })}
      >
        <h4 className="text-primary">Data Maps Lokasi</h4>
        <FormControlWrapper
          control={control}
          name={"map"}
          render={({ helperText, error, ...field }) => (
            <>
              <TextareaAutosize
                minRows={3}
                placeholder="Masukan link dari google maps"
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
        <Link href={"/maps"} className="text-sm text-blue-600 underline">
          Cara menambah maps
        </Link>
        <div className="mt-6 flex justify-end">
          <LoadingButton loading={isLoading} variant="contained" type="submit">
            Simpan
          </LoadingButton>
        </div>
        {getIframeSrc(watch("map")) && (
          <div className="mt-8">
            <iframe
              className="h-96 w-full rounded-md"
              src={getIframeSrc(watch("map"))}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </form>
    </Paper>
  );
};

export default MapsForm;
