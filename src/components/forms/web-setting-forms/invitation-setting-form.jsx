import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const InvitationSettingForm = () => {
  return (
    <Paper className="h-fit w-full rounded-md p-4 lg:w-full xl:w-1/2">
      <form>
        <h4 className="text-primary">Setting Undangan</h4>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <p>Waktu trial undangan (hari)</p>
              <TextField
                size="small"
                type="number"
                name="url"
                className="w-full !rounded-l-none rounded-r-md"
                placeholder="Masukan waktu trial undangan"
              />
            </div>
            <div className="w-full">
              <p>Masa aktif undangan (hari)</p>
              <TextField
                size="small"
                type="number"
                name="url"
                className="w-full !rounded-l-none rounded-r-md"
                placeholder="Masukan waktu aktif undangan"
              />
            </div>
          </div>
          <div>
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

export default InvitationSettingForm;
