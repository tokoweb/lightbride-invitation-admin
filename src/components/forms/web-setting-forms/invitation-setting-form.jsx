import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";

import settingSchema from "@/lib/form-schema/setting";
import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import useFormDefaultValue from "@/lib/hooks/utils/useFormDefaultValue";
import {
  useGetSettingQuery,
  useUpdateSettingMutation,
} from "@/redux/services/setting-api";

import FormControlWrapper from "../form-control-wrapper";

const InvitationSettingForm = () => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      active_days: 0,
    },
    resolver: useYupValidationResolver(settingSchema),
  });
  const { data } = useGetSettingQuery();

  const [update, { isLoading }] = useMutationHandler(useUpdateSettingMutation, {
    success: "Pengaturan website berhasil diubah!",
  });

  useFormDefaultValue(data, setValue);

  return (
    <Paper className="h-fit w-full rounded-md p-4 xl:w-[calc(50%-0.75rem)]">
      <form
        onSubmit={handleSubmit((d) => {
          update(d);
        })}
      >
        <h4 className="form-title">Setting Undangan</h4>
        <div className="flex flex-col gap-4">
          {/* <div className="flex flex-col gap-4 md:flex-row">? */}
          {/* <div className="w-full">
              <p>Waktu trial undangan (hari)</p>
              <TextField
                size="small"
                type="number"
                name="url"
                className="w-full !rounded-l-none rounded-r-md"
                placeholder="Masukan waktu trial undangan"
              />
            </div> */}
          <div className="w-full">
            <p>Masa aktif undangan (hari)</p>
            <FormControlWrapper
              name="active_days"
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  type="number"
                  placeholder="Masukan waktu aktif undangan"
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>
          {/* </div> */}
          {/* <div>
            <p>Salam pembuka</p>
            <TextareaAutosize
              minRows={3}
              placeholder="Masukan salam pembuka (default)"
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <p>Salam pembuka whatsapp (atas)</p>
            <TextareaAutosize
              minRows={3}
              placeholder="Masukan salam pembuka whatsapp (atas)"
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <p>Salam pembuka whatsapp (bawah)</p>
            <TextareaAutosize
              minRows={3}
              placeholder="Masukan salam pembuka whatsapp (bawah)"
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div> */}
        </div>
        <div className="mt-6 flex justify-end">
          <LoadingButton loading={isLoading} type="submit" variant="contained">
            Simpan
          </LoadingButton>
        </div>
      </form>
    </Paper>
  );
};

export default InvitationSettingForm;
