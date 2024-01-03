"use client";

import { useEffect } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";

import clsx from "clsx";
import dayjs from "dayjs";
import { useFieldArray, useForm } from "react-hook-form";

import storySchema from "@/lib/form-schema/story";
import useFormApiHandler from "@/lib/hooks/services/useFormApiHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import {
  useGetStoriesQuery,
  useUpdateStoriesMutation,
} from "@/redux/services/stories-api";

import FormControlWrapper from "../form-control-wrapper";

const StoryForm = () => {
  const [fetcher, { data, isLoading }] = useFormApiHandler(
    useGetStoriesQuery,
    useUpdateStoriesMutation,
  );

  const { control, handleSubmit, watch } = useForm({
    defaultValues: data ?? {
      story: [
        {
          title: "Pertama Bertemu",
          date: dayjs(),
          body: "",
        },
      ],
    },
    resolver: useYupValidationResolver(storySchema),
  });

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "story",
    rules: {
      minLength: 1,
      maxLength: 5,
    },
  });

  const watchDataEvent = watch("story");

  const controlledFields = fields.map((field, index) => ({
    ...field,
    ...watchDataEvent[index],
  }));

  useEffect(() => {
    if (!data) return;

    data.story.forEach((event, i) => {
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
        fetcher(d);
      })}
    >
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {controlledFields.map((item, index) => (
          <Paper className="flex w-full flex-col gap-4 p-4" key={item.id}>
            <h2>Cerita {index + 1}</h2>
            <div>
              <p>Judul Cerita</p>
              <FormControlWrapper
                control={control}
                name={`story[${index}].title`}
                render={(field) => (
                  <TextField
                    size="small"
                    placeholder="Masukan judul cerita. cth(Pertama kita bertemu)"
                    className="mt-1 w-full"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="w-full">
              <p>Tanggal</p>
              <FormControlWrapper
                control={control}
                name={`story[${index}].date`}
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
            <div>
              <p>Alamat lengkap</p>
              <FormControlWrapper
                control={control}
                name={`story[${index}].body`}
                render={({ helperText, error, ...field }) => (
                  <>
                    <TextareaAutosize
                      minRows={3}
                      placeholder="Masukan isi cerita"
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
                {index === fields.length - 1 && fields.length < 5 && (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => {
                      append({
                        title: "",
                        date: dayjs(),
                        body: "",
                      });
                    }}
                  >
                    Tambah Cerita
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

export default StoryForm;
