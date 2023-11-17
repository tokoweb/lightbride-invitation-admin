import { Paper, Button, Switch, FormControlLabel } from "@mui/material";

const FeaturesForm = () => {
  return (
    <Paper className="h-fit w-full rounded-md p-4">
      <form>
        <h4 className="text-primary">Fitur Undangan</h4>
        <div className="flex flex-col md:h-52 md:flex-wrap">
          <FormControlLabel
            className="w-fit"
            control={<Switch />}
            label="Halaman Sampul"
          />
          <FormControlLabel
            className="w-fit"
            control={<Switch />}
            label="Halaman Mempelai"
          />
          <FormControlLabel
            className="w-fit"
            control={<Switch />}
            label="Halaman Acara"
          />
          <FormControlLabel
            className="w-fit"
            control={<Switch />}
            label="Halaman Ucapan"
          />
          <FormControlLabel
            className="w-fit"
            control={<Switch />}
            label="Halaman Gallery/Album"
          />
          <FormControlLabel
            className="w-fit"
            control={<Switch />}
            label="Halaman Cerita"
          />
          <FormControlLabel
            className="w-fit"
            control={<Switch />}
            label="Halaman Lokasi"
          />
          <FormControlLabel
            className="w-fit"
            control={<Switch />}
            label="Halaman QrCode"
          />
          <FormControlLabel
            className="w-fit"
            control={<Switch />}
            label="Halaman Prokes"
          />
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="contained" className="h-fit bg-primary capitalize">
            Simpan
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default FeaturesForm;
