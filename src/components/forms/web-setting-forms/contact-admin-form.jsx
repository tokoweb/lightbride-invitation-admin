import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";

const ContactAdminForm = () => {
  return (
    <Paper className="h-fit w-full rounded-md p-4 lg:w-full xl:w-1/2">
      <form>
        <h4 className="text-primary">Contact Admin</h4>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <p>Email</p>
              <TextField
                size="small"
                type="email"
                name="url"
                className="w-full !rounded-l-none rounded-r-md"
                placeholder="Masukan waktu trial undangan"
              />
              <i>Kosongkan jika tidak membutuhkan notifikasi email</i>
            </div>
            <div className="w-full">
              <p>Password Email</p>
              <TextField
                size="small"
                type="password"
                name="url"
                className="w-full !rounded-l-none rounded-r-md"
                placeholder="Masukan waktu aktif undangan"
              />
            </div>
          </div>
          <div>
            <p>Token Whatsapp gateaway</p>
            <TextField
              size="small"
              type="email"
              name="url"
              className="w-full !rounded-l-none rounded-r-md"
              placeholder="Masukan waktu trial undangan"
            />
            <i>
              Kosongkan jika tidak memiliki token whatsapp gateaway, atau klik{" "}
              <a
                className="text-blue-500 underline"
                href="https://nusagateway.com/"
              >
                di sini
              </a>
            </i>
          </div>
          <div>
            <p>No Whatsapp</p>
            <TextField
              size="small"
              type="password"
              name="url"
              className="w-full !rounded-l-none rounded-r-md"
              placeholder="Masukan waktu aktif undangan"
            />
          </div>
          <div>
            <p>Pesan Whatsapp</p>
            <TextareaAutosize
              minRows={3}
              placeholder="Masukan pesan default saat memesan"
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

export default ContactAdminForm;
