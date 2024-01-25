import { useMemo } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";

import rekeningSchema from "@/lib/form-schema/rekening";
import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useYupValidationResolver from "@/lib/hooks/useYupValidationResolver";
import useFormDefaultValue from "@/lib/hooks/utils/useFormDefaultValue";
import { useGetBankListQuery } from "@/redux/services/master-data-api";
import {
  useCreateRekeningMutation,
  useGetRekeningsQuery,
  useUpdateRekeningMutation,
} from "@/redux/services/rekening-api";

import FormControlWrapper from "../form-control-wrapper";

const RekeningForm = () => {
  const { data, isLoading } = useGetRekeningsQuery();

  const [create, { isLoading: createLoading }] = useMutationHandler(
    useCreateRekeningMutation,
  );
  const [update, { isLoading: updateLoading }] = useMutationHandler(
    useUpdateRekeningMutation,
  );

  const { data: bankList } = useGetBankListQuery();
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      bank_name: "",
      account_name: "",
      account_number: "",
    },
    resolver: useYupValidationResolver(rekeningSchema),
  });

  const SelectOptions = useMemo(
    () => bankList?.map((e) => e.name) || [],
    [bankList],
  );

  useFormDefaultValue(data?.[0], setValue);

  return (
    <Paper className="h-fit w-full rounded-md p-4 xl:w-[calc(50%-0.75rem)]">
      <form
        onSubmit={handleSubmit((d) => {
          if (data?.[0].id) {
            update({ data: d, id: data?.[0].id });cd 
          } else {
            create(d);
          }
        })}
      >
        <h4 className="text-primary">Rekening Pembayaran</h4>
        <div className="flex flex-col gap-4">
          <div>
            <p>Nama Bank</p>
            <FormControlWrapper
              control={control}
              name={`bank_name`}
              render={({ helperText, error, onChange, ...field }) => (
                <>
                  <Autocomplete
                    size="small"
                    options={SelectOptions}
                    className="mt-1 w-full"
                    color={error ? "error" : "primary"}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Masukan nama bank" />
                    )}
                    onChange={(_, value) => onChange(value)}
                    {...field}
                    isOptionEqualToValue={(option, value) => option === value}
                  />
                  <FormHelperText>{helperText}</FormHelperText>
                </>
              )}
            />
          </div>

          <div>
            <p>Nomor Rekening</p>
            <FormControlWrapper
              control={control}
              name={`account_number`}
              render={(field) => (
                <TextField
                  size="small"
                  type="number"
                  placeholder="Masukan nomor rekening"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Nama Pemilik Rekening</p>
            <FormControlWrapper
              control={control}
              name={`account_name`}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Masukan nama pemilik rekening"
                  className="mt-1 w-full"
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <LoadingButton
            loading={isLoading || createLoading || updateLoading}
            variant="contained"
            className="h-fit bg-primary capitalize"
            type="submit"
          >
            Simpan
          </LoadingButton>
        </div>
      </form>
    </Paper>
  );
};

export default RekeningForm;
