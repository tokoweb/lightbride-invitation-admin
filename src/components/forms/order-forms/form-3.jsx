import { useState } from "react";

import Link from "next/link";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormHelperText from "@mui/material/FormHelperText";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { DatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers";

import clsx from "clsx";
import dayjs from "dayjs";
import { useFieldArray, useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa6";

import eventSchema from "@/lib/form-schema/event";
import mapSchema from "@/lib/form-schema/map";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import mergeSchema from "@/lib/utils/mergeSchema";

import FormControlWrapper from "../form-control-wrapper";

const Form3 = ({
  setIndex,
  defaultValues,
  setDefaultValues,
  submitHandler,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit, watch } = useForm({
    defaultValues,
    resolver: useYupValidationResolver(mergeSchema(eventSchema, mapSchema)),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "data_event",
    rules: {
      minLength: 1,
      maxLength: 3,
    },
  });

  const watchDataEvent = watch("data_event");

  const controlledFields = fields.map((field, index) => ({
    ...field,
    ...watchDataEvent[index],
  }));

  return (
    <form
      onSubmit={handleSubmit(async (d) => {
        const data_event = d.data_event.map((e) => ({
          ...e,
          date: dayjs(e.date).format("YYYY-MM-DD"),
          time: dayjs(e.time).format("HH:mm:ss"),
        }));

        setDefaultValues((prev) => ({ ...prev, ...d, data_event }));
        setIsLoading(true);

        await submitHandler();
        setIsLoading(false);
      })}
    >
      <div className="mb-8 text-center">
        <h1 className="text-primary">Informasi Acara</h1>
        <p>Hai kak! di isi dulu ya datanya</p>
      </div>

      {controlledFields.map((item, index) => (
        <div className="flex flex-col gap-4" key={item.id}>
          <h2>Acara {index + 1}</h2>
          <div>
            <p>Nama Acara</p>
            <FormControlWrapper
              control={control}
              name={`data_event[${index}].name`}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama acara. cth(Akad Nikah)"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <p>Tanggal</p>
              <FormControlWrapper
                control={control}
                name={`data_event[${index}].date`}
                render={({ helperText, error, value, ...field }) => (
                  <>
                    <DatePicker
                      className="mt-1 h-10 w-full [&_.MuiInputBase-root]:h-10"
                      value={dayjs(value)}
                      {...field}
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

            <div className="w-full">
              <p>Waktu/jam</p>
              <FormControlWrapper
                control={control}
                name={`data_event[${index}].time`}
                render={({ helperText, error, value, ...field }) => (
                  <>
                    <TimePicker
                      className="mt-1 h-10 w-full [&_.MuiInputBase-root]:h-10"
                      ampm={false}
                      value={dayjs(value)}
                      {...field}
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
            <p>Tempat/lokasi</p>
            <FormControlWrapper
              control={control}
              name={`data_event[${index}].location`}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="cth(Rumah mempelai pria)"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <p>Alamat lengkap</p>
            <FormControlWrapper
              control={control}
              name={`data_event[${index}].address`}
              render={({ helperText, error, ...field }) => (
                <>
                  <TextareaAutosize
                    minRows={3}
                    placeholder="Masukan alamat lengkap akad. cth(Jl. SDN Panggoi, Lr. Anggrek, No. 3 Lhokseumawe)"
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

          <Grid container spacing={3}>
            {fields.length > 1 && (
              <Grid xs={2}>
                <Button
                  fullWidth
                  color="error"
                  variant="outlined"
                  size="small"
                  onClick={() => remove(index)}
                >
                  Hapus
                </Button>
              </Grid>
            )}
            {index === fields.length - 1 && fields.length < 3 && (
              <Grid xs>
                <Button
                  fullWidth
                  variant="contained"
                  size="small"
                  onClick={() => {
                    append({
                      name: "",
                      date: dayjs(),
                      time: "",
                      location: "",
                      address: "",
                    });
                  }}
                >
                  Tambah Acara
                </Button>
              </Grid>
            )}
          </Grid>

          <Divider className="mb-4 mt-2" />
        </div>
      ))}

      <div>
        <p>Link google maps</p>
        <FormControlWrapper
          control={control}
          name={`map`}
          render={({ helperText, error, ...field }) => (
            <>
              <TextareaAutosize
                minRows={3}
                placeholder="Masukan link google maps"
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
      </div>

      <Grid container spacing={3} className="mt-6">
        <Grid xs={2}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => setIndex((prev) => prev - 1)}
            className="h-full"
          >
            <FaChevronLeft />
          </Button>
        </Grid>

        <Grid xs>
          <LoadingButton
            loading={isLoading}
            fullWidth
            variant="contained"
            type="submit"
          >
            Buat Undangan
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form3;
