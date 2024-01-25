import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";

import clsx from "clsx";
import { useForm } from "react-hook-form";

import useFormApiHandler from "@/lib/hooks/services/useFormApiHandler";
import useFormDefaultValue from "@/lib/hooks/utils/useFormDefaultValue";
import {
  useGetSocialMediaQuery,
  useUpdateSocialMediaMutation,
} from "@/redux/services/social-media-api";

import FormControlWrapper from "../form-control-wrapper";

const SocialMediaForm = () => {
  const [update, { data, isLoading }] = useFormApiHandler(
    useGetSocialMediaQuery,
    useUpdateSocialMediaMutation,
  );

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      email: "",
      phone_number: "",
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
      tiktok: "",
      website: "",
      address: "",
    },
  });

  useFormDefaultValue(data, setValue);

  return (
    <Paper className="w-full p-4 xl:w-[calc(50%-0.75rem)]">
      <form
        onSubmit={handleSubmit((d) => {
          update(new URLSearchParams(d));
        })}
      >
        <h3 className="form-title">Kontak Kami</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <p>Email</p>
            <FormControlWrapper
              name={"email"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Email"
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>No. Handphone</p>
            <FormControlWrapper
              name={"phone_number"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="No. Handphone"
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Facebook</p>
            <FormControlWrapper
              name={"facebook"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Facebook"
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Instagram</p>
            <FormControlWrapper
              name={"instagram"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Instagram"
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Twitter</p>
            <FormControlWrapper
              name={"twitter"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Twitter"
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Youtube</p>
            <FormControlWrapper
              name={"youtube"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Youtube"
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>TikTok</p>
            <FormControlWrapper
              name={"tiktok"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="TikTok"
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>

          <div>
            <p>Website</p>
            <FormControlWrapper
              name={"website"}
              control={control}
              render={(field) => (
                <TextField
                  size="small"
                  placeholder="Website"
                  fullWidth
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-4">
          <p>Alamat</p>
          <FormControlWrapper
            control={control}
            name={`address`}
            render={({ helperText, error, ...field }) => (
              <>
                <TextareaAutosize
                  minRows={3}
                  placeholder="Alamat"
                  className={clsx(
                    `mt-1 w-full rounded-md border border-gray-300 p-2`,
                    { error: error },
                  )}
                  {...field}
                />
                {error && (
                  <FormHelperText error={error}>{helperText}</FormHelperText>
                )}
              </>
            )}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <LoadingButton
            loading={isLoading}
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
export default SocialMediaForm;
