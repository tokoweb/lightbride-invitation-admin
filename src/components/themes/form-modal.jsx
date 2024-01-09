import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";
import { FaX } from "react-icons/fa6";

import themeSchema from "@/lib/form-schema/theme";
import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import { buildFormData } from "@/lib/utils/formData";
import {
  useCreateThemeMutation,
  useUpdateThemeMutation,
} from "@/redux/services/themes-api";

import FormControlWrapper from "../forms/form-control-wrapper";
import ImageCropper from "../forms/image-crop";

const ThemeFormModal = ({ defaultValues, id, open, setOpen }) => {
  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues,
    resolver: useYupValidationResolver(themeSchema),
  });

  const [createTheme, { isLoading: createLoading }] = useMutationHandler(
    useCreateThemeMutation,
    {
      success: "Tema baru berhasil dibuat!",
    },
    () => {
      reset();
      setOpen(false);
    },
  );

  const [updateTheme, { isLoading: updateLoading }] = useMutationHandler(
    useUpdateThemeMutation,
    {
      success: "Tema berhasil diubah!",
    },
    () => {
      reset();
      setOpen(false);
    },
  );

  return (
    <Dialog open={open} fullWidth onClose={() => setOpen(false)}>
      <form
        onSubmit={handleSubmit((d) => {
          d = buildFormData({
            ...d,
            code_theme: d.name_theme,
            is_active: !!defaultValues?.is_actvie ? "1" : "0",
          });

          if (defaultValues && id) {
            updateTheme({
              id,
              data: d,
            });
          } else {
            createTheme(d);
          }
        })}
      >
        <DialogTitle className="flex justify-between">
          <h3>{defaultValues && id ? "Ubah Data Tema" : "Tambah Tema Baru"}</h3>

          <IconButton color="error" size="small" onClick={() => setOpen(false)}>
            <FaX />
          </IconButton>
        </DialogTitle>

        <DialogContent className="flex flex-col gap-4" dividers>
          <div>
            <p>Preview tema</p>
            <div className="rounded-lg bg-gray-100 p-4">
              <FormControlWrapper
                name={"image"}
                control={control}
                render={({ error, helperText }) => (
                  <>
                    <ImageCropper
                      setResult={(res) =>
                        setValue("image", res, { shouldValidate: true })
                      }
                      aspectRatio={4 / 3}
                      imageClassName={"aspect-w-4 aspect-h-3"}
                      imgPreview={
                        defaultValues ? defaultValues.image : undefined
                      }
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
            <p>Nama tema</p>
            <FormControlWrapper
              name={"name_theme"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama tema baru"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Direktori tema</p>
            <FormControlWrapper
              name={"directory"}
              control={control}
              render={(field) => (
                <div className="mt-1 flex items-start">
                  <div className="h-full whitespace-nowrap rounded-l-md bg-primary p-2 text-white">
                    @/components/themes/
                  </div>
                  <TextField
                    size="small"
                    placeholder="Direktori tema"
                    className="w-full min-w-16 rounded-r-md [&_.MuiInputBase-root]:rounded-l-none"
                    {...field}
                  />
                </div>
              )}
            />
          </div>
        </DialogContent>

        <DialogActions className="p-4">
          <LoadingButton
            loading={createLoading || updateLoading}
            size="small"
            variant="contained"
            type="submit"
          >
            Simpan
          </LoadingButton>
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={() => setOpen(false)}
          >
            Batal
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
export default ThemeFormModal;
