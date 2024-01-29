import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import { DatePicker } from "@mui/x-date-pickers";

import dayjs from "dayjs";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { FaX } from "react-icons/fa6";

import orderSchema from "@/lib/form-schema/order";
import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import useFormDefaultValue from "@/lib/hooks/utils/useFormDefaultValue";
import {
  useGetOrderQuery,
  useUpdateOrderMutation,
} from "@/redux/services/orders-api";

import FormControlWrapper from "../forms/form-control-wrapper";

const UserFormModal = ({ id, open, setOpen }) => {
  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      status: "",
      trial_date: "",
      active_date: "",
    },
    resolver: useYupValidationResolver(orderSchema),
  });

  const { data, isLoading } = useGetOrderQuery(id);

  const [update, { isLoading: updateLoading }] = useMutationHandler(
    useUpdateOrderMutation,
    {
      success: "Pengguna berhasil diubah!",
    },
    () => {
      reset();
      setOpen(false);
    },
  );

  useFormDefaultValue(
    data
      ? {
          status: data?.status,
          trial_date: dayjs(data?.trial_date),
          active_date: dayjs(data?.active_date),
        }
      : undefined,
    setValue,
  );

  return (
    <Dialog
      open={open}
      classes={{ paper: "w-full max-w-96" }}
      onClose={() => setOpen(false)}
    >
      <form
        onSubmit={handleSubmit((d) => {
          update({
            ...d,
            trial_date: dayjs(d.trial_date).format("YYYY-MM-DD"),
            active_date: dayjs(d.active_date).format("YYYY-MM-DD"),
          });
        })}
      >
        <DialogTitle className="flex justify-between">
          <h3>Ubah data pengguna</h3>

          <IconButton color="error" size="small" onClick={() => setOpen(false)}>
            <FaX />
          </IconButton>
        </DialogTitle>

        <DialogContent className="max-w flex flex-col gap-4" dividers>
          <div>
            <FormControlWrapper
              name={"status"}
              control={control}
              render={({ value, onChange }) => (
                <FormControlLabel
                  className="m-0 flex w-full flex-row-reverse justify-between"
                  control={<Switch />}
                  label={"Status undangan"}
                  checked={value === "active"}
                  onChange={(_, checked) =>
                    onChange(checked ? "active" : "inactive")
                  }
                />
              )}
            />
          </div>

          <div className="w-full">
            <p>Masa Aktif Trial</p>
            <FormControlWrapper
              control={control}
              name={`trial_date`}
              render={({ helperText, error, value, ...field }) => (
                <>
                  <DatePicker
                    className="mt-1 h-10 w-full [&_.MuiInputBase-root]:h-10"
                    value={dayjs(value)}
                    format="YYYY-MM-DD"
                    {...field}
                  />
                  {error && (
                    <FormHelperText error={error}>{helperText}</FormHelperText>
                  )}
                </>
              )}
            />
          </div>

          <div className="w-full">
            <p>Masa Aktif</p>
            <FormControlWrapper
              control={control}
              name={`active_date`}
              render={({ helperText, error, value, ...field }) => (
                <>
                  <DatePicker
                    className="mt-1 h-10 w-full [&_.MuiInputBase-root]:h-10"
                    value={dayjs(value)}
                    format="YYYY-MM-DD"
                    {...field}
                  />
                  {error && (
                    <FormHelperText error={error}>{helperText}</FormHelperText>
                  )}
                </>
              )}
            />
          </div>
        </DialogContent>

        <DialogActions className="p-4">
          <LoadingButton
            loading={isLoading || updateLoading}
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
export default UserFormModal;
