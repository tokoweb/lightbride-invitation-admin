"use client";

import { useEffect, useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import FormControlWrapper from "../form-control-wrapper";
import ImageCropper from "../image-crop";

const BrideForm = ({ control, setValue, defaultValues, loading }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    setValue("woman_photo", image);
  }, [image]);

  return (
    <Paper className="w-full p-4">
      <h3 className="form-title">Data mempelai wanita</h3>
      <div className="rounded-md bg-gray-100 p-4">
        <FormControlWrapper
          name={"woman_photo"}
          control={control}
          render={({ error, helperText }) => (
            <>
              <ImageCropper
                setResult={(res) =>
                  setValue("woman_photo", res, { shouldValidate: true })
                }
                aspectRatio={3 / 4}
                imageClassName={"aspect-w-3 aspect-h-4"}
                imgPreview={defaultValues?.woman_photo}
              />
              {error && (
                <FormHelperText error={error}>{helperText}</FormHelperText>
              )}
            </>
          )}
        />
      </div>
      <div className="form-container mt-8">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <p>Nama lengkap mempelai wanita</p>
            <FormControlWrapper
              name={"name_female"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Masukan nama lengkap mempelai wanita"
                  {...field}
                />
              )}
            />
          </div>

          <div className="w-full">
            <p>Nama panggilan mempelai wanita</p>
            <FormControlWrapper
              name={"nickname_female"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Masukan nama panggilan mempelai wanita"
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <p>Nama ayah mempelai wanita</p>
            <FormControlWrapper
              name={"name_woman_father"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Masukan nama ayah mempelai wanita"
                  {...field}
                />
              )}
            />
          </div>

          <div className="w-full">
            <p>Nama ibu mempelai wanita</p>
            <FormControlWrapper
              name={"name_woman_mother"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Masukan nama ibu mempelai wanita"
                  {...field}
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <LoadingButton loading={loading} variant="contained" type="submit">
          Simpan
        </LoadingButton>
      </div>
    </Paper>
  );
};

export default BrideForm;
