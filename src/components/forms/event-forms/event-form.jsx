"use client";

import { useEffect } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

import clsx from "clsx";
import dayjs from "dayjs";
import { useFieldArray, useForm } from "react-hook-form";

import eventSchema from "@/lib/form-schema/event";
import useFormApiHandler from "@/lib/hooks/services/useFormApiHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import mergeSchema from "@/lib/utils/mergeSchema";
import {
  useGetEventsQuery,
  useUpdateEventsMutation,
} from "@/redux/services/events-api";

import FormControlWrapper from "../form-control-wrapper";

const EventForm = () => {
  const [fetcher, { data, isLoading }] = useFormApiHandler(
    useGetEventsQuery,
    useUpdateEventsMutation,
  );

  const { control, handleSubmit, watch } = useForm({
    defaultValues: data ?? {
      data_event: [
        {
          name: "Akad Nikah",
          date: "",
          time: "",
          location: "",
          address: "",
        },
      ],
    },
    resolver: useYupValidationResolver(mergeSchema(eventSchema)),
  });

  const { fields, append, remove, update } = useFieldArray({
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

  useEffect(() => {
    if (!data) return;

    data.data_event.forEach((event, i) => {
      if (i === 0) {
        update(0, event);
      } else {
        append(event);
      }
    });
  }, [data]);

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit((d) => {
        fetcher({
          data_event: d.data_event.map((event) => ({
            ...event,
            date: dayjs(event.date).format("YYYY-MM-DD"),
            time: dayjs(event.time).format("HH:mm:ss"),
          })),
        });
      })}
    >
      {/* <h4 className="text-primary">Data Akad Nikah</h4> */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {controlledFields.map((item, index) => (
          <Paper className="flex w-full flex-col gap-4 p-4" key={item.id}>
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
                        format="YYYY-MM-DD"
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
                      <FormHelperText error={error}>
                        {helperText}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </div>

            <div className="flex w-full justify-between">
              <div>
                {fields.length > 1 && (
                  <Button
                    fullWidth
                    color="error"
                    variant="outlined"
                    size="small"
                    onClick={() => remove(index)}
                  >
                    Hapus
                  </Button>
                )}
              </div>
              <div className="flex gap-4">
                {index === fields.length - 1 && fields.length < 3 && (
                  <Button
                    variant="outlined"
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
                )}

                <LoadingButton
                  loading={isLoading}
                  variant="contained"
                  size="small"
                  type="submit"
                >
                  Simpan
                </LoadingButton>
              </div>
            </div>
          </Paper>
        ))}
      </div>
    </form>
  );
};

export default EventForm;
