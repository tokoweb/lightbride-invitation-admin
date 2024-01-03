"use client";

import LoadingButton from "@mui/lab/LoadingButton";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";

import FormControlWrapper from "../form-control-wrapper";
import ImageCropper from "../image-crop";

const CoverForm = ({ setValue, defaultValues, control, loading }) => {
  return (
    <Paper className="p-4">
      <h4 className="form-title">Data foto sampul</h4>
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <div className="flex w-full flex-col justify-center rounded-md bg-gray-100 p-4">
          <FormControlWrapper
            name={"cover_photo_landscape"}
            control={control}
            render={({ error, helperText }) => (
              <>
                <ImageCropper
                  setResult={(res) =>
                    setValue("cover_photo_landscape", res, {
                      shouldValidate: true,
                    })
                  }
                  aspectRatio={16 / 9}
                  className={"my-0 mb-4 w-full max-w-[700px]"}
                  imageClassName={"aspect-w-16 aspect-h-9"}
                  imgPreview={defaultValues?.cover_photo_landscape}
                />
                {error && (
                  <FormHelperText error={error}>{helperText}</FormHelperText>
                )}
              </>
            )}
          />
        </div>

        <div className="w-full max-w-[500px] rounded-md bg-gray-100 p-4">
          <FormControlWrapper
            name={"cover_photo_potrait"}
            control={control}
            render={({ error, helperText }) => (
              <>
                <ImageCropper
                  setResult={(res) =>
                    setValue("cover_photo_potrait", res, {
                      shouldValidate: true,
                    })
                  }
                  aspectRatio={9 / 16}
                  imageClassName={"aspect-w-9 aspect-h-16"}
                  imgPreview={defaultValues?.cover_photo_potrait}
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
        <LoadingButton loading={loading} variant="contained" type="submit">
          Simpan
        </LoadingButton>
      </div>
    </Paper>
  );
};

export default CoverForm;
