import { Paper, Button, TextareaAutosize } from "@mui/material";

const GreetingsForm = () => {
  return (
    <Paper className="h-fit w-full rounded-md p-4">
      <form>
        <h4 className="text-primary">Salam Pembuka</h4>
        <div>
          <div>
            <p>Salam pembuka undangan</p>
            <TextareaAutosize
              minRows={3}
              placeholder="Masukan salam pembuka undangan..."
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="mt-4">
            <p>Salam pembuka whatsapp (atas)</p>
            <TextareaAutosize
              minRows={3}
              placeholder="Masukan salam pembuka whatsapp (atas)..."
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="mt-4">
            <p>Salam pembuka whatsapp (bawah)</p>
            <TextareaAutosize
              minRows={3}
              placeholder="Masukan salam pembuka whatsapp (bawah)..."
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

export default GreetingsForm;
