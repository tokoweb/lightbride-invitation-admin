import { Paper, Button, TextField } from "@mui/material";

const ProfileForm = () => {
  return (
    <Paper className="h-fit w-full rounded-md p-4 lg:w-2/3 xl:w-1/2">
      <form>
        <h4 className="text-primary">Testimonial</h4>
        <div className="flex flex-col gap-4">
          <div>
            <p>Username</p>
            <TextField
              size="small"
              name="url"
              className="w-full !rounded-l-none rounded-r-md"
              placeholder="Masukan nama lengkap"
            />
          </div>
          <div>
            <p>Password</p>
            <TextField
              type="password"
              size="small"
              name="url"
              className="w-full !rounded-l-none rounded-r-md"
              placeholder="Masukan nama provinsi"
            />
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <p>Email</p>
              <TextField
                type="email"
                size="small"
                name="url"
                className="w-full !rounded-l-none rounded-r-md"
                placeholder="Masukan nama kota"
              />
            </div>
            <div className="w-full">
              <p>Nomor Hp</p>
              <TextField
                size="small"
                name="url"
                className="w-full !rounded-l-none rounded-r-md"
                placeholder="Masukan nama kota"
              />
            </div>
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

export default ProfileForm;
