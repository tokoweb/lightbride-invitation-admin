import TextField from "@mui/material/TextField";

const Form1 = () => {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-primary">Hallo!</h2>
        <p>Hai kak! di isi dulu ya datanya </p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p>Nama Domain / URL Undangan</p>
          <div className="mt-1 flex items-center">
            <div className="h-full rounded-l-md bg-primary p-2 text-white">
              site.undangan.my.id/
            </div>
            <TextField
              size="small"
              name="url"
              className="w-full !rounded-l-none rounded-r-md"
              placeholder="akudandia"
            />
          </div>
        </div>
        <div>
          <p>Email</p>
          <TextField
            type="email"
            required
            size="small"
            placeholder="Masukan email"
            className="mt-1 w-full"
          />
        </div>
        <div>
          <p>Password</p>
          <TextField
            type="password"
            required
            size="small"
            placeholder="Masukan password"
            className="mt-1 w-full"
          />
        </div>
        <div>
          <p>Nomor HP / Whatsapp</p>
          <TextField
            required
            size="small"
            placeholder="Masukan nomor HP"
            className="mt-1 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Form1;
