import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { FaX } from "react-icons/fa6";

import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import {
  useCreateSubCategoryMutation,
  useUpdateSubCategoryMutation,
} from "@/redux/services/theme-sub-categories";

import FormControlWrapper from "../forms/form-control-wrapper";

const SubCategoryFormModal = ({ defaultValues, id, open, setOpen }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    resolver: useYupValidationResolver(
      object({
        name: string().required("Nama sub-kategori tidak boleh kosong"),
      }),
    ),
  });

  const [createSubCategory, { isLoading: createLoading }] = useMutationHandler(
    useCreateSubCategoryMutation,
    {
      success: "Sub-Kategori baru berhasil dibuat!",
    },
    () => {
      reset();
      setOpen(false);
    },
  );

  const [updateSubCategory, { isLoading: updateLoading }] = useMutationHandler(
    useUpdateSubCategoryMutation,
    {
      success: "Sub-Kategori berhasil diubah!",
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
          if (defaultValues && id) {
            updateSubCategory({
              id,
              data: new URLSearchParams(d),
            });
          } else {
            createSubCategory(new URLSearchParams(d));
          }
        })}
      >
        <DialogTitle className="flex justify-between">
          <h3>
            {defaultValues && id
              ? "Ubah Data Sub-Kategori"
              : "Tambah Sub-Kategori Baru"}
          </h3>

          <IconButton color="error" size="small" onClick={() => setOpen(false)}>
            <FaX />
          </IconButton>
        </DialogTitle>

        <DialogContent className="flex flex-col gap-4" dividers>
          <div>
            <p>Nama Sub-Kategori</p>
            <FormControlWrapper
              name={"name"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama sub-kategori baru"
                  className="mt-1 w-full"
                  {...field}
                />
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
export default SubCategoryFormModal;
