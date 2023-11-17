import { Paper, Button } from "@mui/material";
import PhotoForm from "./photo-form";

const CoverForm = () => {
  return (
    <Paper className="h-fit w-full rounded-md p-4">
      <form>
        <h4 className="text-primary">Data foto sampul</h4>
        <div className="">
          <PhotoForm />
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

export default CoverForm;
