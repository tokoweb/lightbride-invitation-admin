import Autocomplete from "@mui/material/Autocomplete";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";

const Select = ({
  helperText,
  error,
  onChange,
  value,
  options,
  placeHolder,
  ...field
}) => {
  return (
    <>
      <Autocomplete
        value={value}
        size="small"
        options={options}
        className="mt-1"
        fullWidth
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} error={error} placeholder={placeHolder} />
        )}
        onChange={(_, value) => onChange(value)}
        {...field}
        isOptionEqualToValue={(option, value) => option.id === value.id}
      />
      <FormHelperText error>{helperText}</FormHelperText>
    </>
  );
};

export default Select;
