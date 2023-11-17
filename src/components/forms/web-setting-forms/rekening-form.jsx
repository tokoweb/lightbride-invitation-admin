import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const RekeningForm = () => {
  return (
    <Paper className="h-fit w-full rounded-md p-4 lg:w-2/3 xl:w-1/2">
      <form>
        <h4 className="text-primary">Rekening Pembayaran</h4>
        <div className="flex flex-col gap-4">
          <div>
            <p>Nama Bank</p>
            <TextField
              size="small"
              name="url"
              className="w-full !rounded-l-none rounded-r-md"
              placeholder="Masukan waktu trial undangan"
            />
          </div>
          <div>
            <p>Nomor Rekening</p>
            <TextField
              size="small"
              type="number"
              name="url"
              className="w-full !rounded-l-none rounded-r-md"
              placeholder="Masukan waktu aktif undangan"
            />
          </div>
          <div>
            <p>Nama Rekening</p>
            <TextField
              size="small"
              name="url"
              className="w-full !rounded-l-none rounded-r-md"
              placeholder="Masukan waktu aktif undangan"
            />
          </div>
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

export default RekeningForm;
