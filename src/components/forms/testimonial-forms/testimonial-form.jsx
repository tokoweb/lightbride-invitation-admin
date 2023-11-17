import { Paper, Button, TextField, TextareaAutosize } from "@mui/material";

const TestimonialForm = () => {
  return (
    <Paper className="h-fit w-full rounded-md p-4 lg:w-2/3 xl:w-1/2">
      <form>
        <h4 className="text-primary">Testimonial</h4>
        <div className="flex flex-col gap-4">
          <div>
            <p>Nama lengkap</p>
            <TextField
              size="small"
              name="url"
              className="w-full !rounded-l-none rounded-r-md"
              placeholder="Masukan nama lengkap"
            />
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <p>Provinsi</p>
              <TextField
                size="small"
                name="url"
                className="w-full !rounded-l-none rounded-r-md"
                placeholder="Masukan nama provinsi"
              />
            </div>
            <div className="w-full">
              <p>Kota</p>
              <TextField
                size="small"
                name="url"
                className="w-full !rounded-l-none rounded-r-md"
                placeholder="Masukan nama kota"
              />
            </div>
          </div>
          <div>
            <p>Ulasan</p>
            <TextareaAutosize
              minRows={3}
              placeholder="Masukan ulasan anda"
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

export default TestimonialForm;
