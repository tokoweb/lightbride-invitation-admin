"use client";

import LoadingButton from "@mui/lab/LoadingButton";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import FormControlWrapper from "../form-control-wrapper";
import ImageCropper from "../image-crop";

const GroomForm = ({ control, setValue, defaultValues, loading }) => {
  return (
    <Paper className="w-full p-4">
      <h3 className="form-title">Data mempelai pria</h3>
      <div className="rounded-md bg-gray-100 p-4">
        <FormControlWrapper
          name={"man_photo"}
          control={control}
          render={({ error, helperText }) => (
            <>
              <ImageCropper
                setResult={(res) =>
                  setValue("man_photo", res, { shouldValidate: true })
                }
                aspectRatio={3 / 4}
                imageClassName={"aspect-w-3 aspect-h-4"}
                imgPreview={defaultValues?.man_photo}
              />
              {error && (
                <FormHelperText error={error}>{helperText}</FormHelperText>
              )}
            </>
          )}
        />
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <div className="form-container md:flex-row">
          <div className="w-full">
            <p>Nama lengkap mempelai pria</p>
            <FormControlWrapper
              name={"name_male"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Masukan nama lengkap mempelai pria"
                  {...field}
                />
              )}
            />
          </div>

          <div className="w-full">
            <p>Nama panggilan mempelai pria</p>
            <FormControlWrapper
              name={"nickname_male"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Masukan nama panggilan mempelai pria"
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <p>Nama ayah mempelai pria</p>
            <FormControlWrapper
              name={"name_man_father"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Masukan nama ayah mempelai pria"
                  {...field}
                />
              )}
            />
          </div>

          <div className="w-full">
            <p>Nama ibu mempelai pria</p>
            <FormControlWrapper
              name={"name_man_mother"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Masukan nama ibu mempelai pria"
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

export default GroomForm;
