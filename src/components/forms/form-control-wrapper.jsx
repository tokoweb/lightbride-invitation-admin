import { Controller } from "react-hook-form";

const FormControlWrapper = ({ control, name, render }) => (
  <Controller
    name={name}
    control={control}
    render={({ field, formState: { errors } }) => {
      // console.log(errors);
      return render({
        ...field,
        error: !!errors[name],
        helperText: errors[name]?.message,
      });
    }}
  />
);

export default FormControlWrapper;
