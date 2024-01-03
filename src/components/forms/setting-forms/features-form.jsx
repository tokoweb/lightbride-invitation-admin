"use client";

import LoadingButton from "@mui/lab/LoadingButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";

import { useForm } from "react-hook-form";

import useFormApiHandler from "@/lib/hooks/services/useFormApiHandler";
import {
  useGetFeaturesQuery,
  useUpdateFeaturesMutation,
} from "@/redux/services/settings-api";

import FormControlWrapper from "../form-control-wrapper";

const features = [
  {
    name: "cover",
    label: "Halaman Opening",
    disabled: true,
    checked: true,
  },
  {
    name: "bridegroom",
    label: "Halaman Mempelai",
  },
  {
    name: "event",
    label: "Halaman Acara",
  },
  {
    name: "comment",
    label: "Halaman Ucapan",
  },
  {
    name: "gallery",
    label: "Halaman Gallery/Album",
  },
  {
    name: "story",
    label: "Halaman Cerita",
  },
  {
    name: "address",
    label: "Halaman Lokasi",
  },
  {
    name: "qrcode",
    label: "Halaman QrCode",
  },
  {
    name: "prokes",
    label: "Halaman Prokes",
  },
];

const FeaturesForm = () => {
  const [fetcher, { data, isLoading }] = useFormApiHandler(
    useGetFeaturesQuery,
    useUpdateFeaturesMutation,
  );

  const { control, handleSubmit } = useForm({
    defaultValues: data ?? {
      cover: true,
      bridegroom: false,
      event: false,
      comment: false,
      gallery: false,
      story: false,
      address: false,
      prokes: false,
      qrcode: false,
    },
  });

  return (
    <Paper className="h-fit w-full rounded-md p-4">
      <form
        onSubmit={handleSubmit((d) => {
          fetcher(d);
        })}
      >
        <h3 className="form-title">Fitur Undangan</h3>
        <div className="flex flex-col md:h-52 md:flex-wrap gap-1 p-2">
          {features.map(({ name, label, checked, disabled }, i) => (
            <FormControlWrapper
              key={`feature_${i}`}
              name={name}
              control={control}
              render={({ value, disabled: _, onChange }) => (
                <FormControlLabel
                  className="w-fit"
                  control={<Switch />}
                  label={label}
                  checked={value ?? !!checked}
                  disabled={!!disabled}
                  onChange={onChange}
                />
              )}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <LoadingButton variant="contained" loading={isLoading} type="submit">
            Simpan
          </LoadingButton>
        </div>
      </form>
    </Paper>
  );
};

export default FeaturesForm;
