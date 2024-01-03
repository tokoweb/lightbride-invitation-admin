"use client";

import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";

import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa6";

import brideSchema from "@/lib/form-schema/bride";
import coverSchema from "@/lib/form-schema/cover";
import groomSchema from "@/lib/form-schema/groom";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import mergeSchema from "@/lib/utils/mergeSchema";

import FormControlWrapper from "../form-control-wrapper";
import ImageCropper from "../image-crop";

const Form2 = ({ setIndex, defaultValues, setDefaultValues }) => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues,
    resolver: useYupValidationResolver(
      mergeSchema(brideSchema, groomSchema, coverSchema),
    ),
  });

  return (
    <form
      onSubmit={handleSubmit((d) => {
        setDefaultValues((prev) => ({
          ...prev,
          ...d,
        }));

        setIndex((prev) => prev + 1);
      })}
    >
      <div className="mb-8 text-center">
        <h1 className="text-primary">Informasi Mempelai</h1>
        <p>Hai kak! di isi dulu ya datanya</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="m-0 text-xl">Calon Mempelai Pria</h3>
          <div>
            <p>Foto mempelai pria</p>
            <div className="rounded-lg bg-gray-100 p-4">
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
                      imgPreview={defaultValues.man_photo}
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
            <p>Nama lengkap mempelai pria</p>
            <FormControlWrapper
              name={"name_male"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama lengkap mempelai pria"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Nama panggilan mempelai pria</p>
            <FormControlWrapper
              name={"nickname_male"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama panggilan mempelai pria"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Nama ayah mempelai pria</p>
            <FormControlWrapper
              name={"name_man_father"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama ayah mempelai pria"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Nama ibu mempelai pria</p>
            <FormControlWrapper
              name={"name_man_mother"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama ibu mempelai pria"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>

          <Divider className="mb-4 mt-2" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="m-0 text-xl">Calon Mempelai Wanita</h3>
          <div>
            <p>Foto mempelai wanita</p>
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
                      imgPreview={defaultValues.woman_photo}
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
            <p>Nama lengkap mempelai wanita</p>
            <FormControlWrapper
              name={"name_female"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama lengkap mempelai wanita"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Nama panggilan mempelai wanita</p>
            <FormControlWrapper
              name={"nickname_female"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama panggilan mempelai wanita"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Nama ayah mempelai wanita</p>
            <FormControlWrapper
              name={"name_woman_father"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama ayah mempelai wanita"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Nama ibu mempelai wanita</p>
            <FormControlWrapper
              name={"name_woman_mother"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama ibu mempelai wanita"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>
          <Divider className="mb-4 mt-2" />
        </div>

        <div className="flex flex-col gap-4">
          <p>Foto sampul</p>

          <div className="rounded-lg bg-gray-100 p-4">
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
                    imageClassName={"aspect-w-16 aspect-h-9"}
                    imgPreview={defaultValues.cover_photo_landscape}
                  />
                  {error && (
                    <FormHelperText error={error}>{helperText}</FormHelperText>
                  )}
                </>
              )}
            />
          </div>

          <div className="rounded-lg bg-gray-100 p-4">
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
                    imgPreview={defaultValues.cover_photo_potrait}
                  />
                  {error && (
                    <FormHelperText error={error}>{helperText}</FormHelperText>
                  )}
                </>
              )}
            />
          </div>
        </div>
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
          <Button fullWidth variant="contained" type="submit">
            Lanjutkan
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form2;
