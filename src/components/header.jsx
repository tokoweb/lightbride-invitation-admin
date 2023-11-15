import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import Popover from "@mui/material/Popover";

import { useDispatch, useSelector } from "react-redux";
import {
  getNavigationOpen,
  setNavigationOpen,
} from "@/redux/slices/navigation";

import Link from "next/link";

import { LuUser2 } from "react-icons/lu";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [logout, setLogout] = useState(false);
  const open = useSelector(getNavigationOpen);
  const dispatch = useDispatch();

  return (
    <div className="flex h-[72px] w-full items-center justify-between bg-white px-6 py-4">
      <div>
        <button
          className="relative h-10 w-10 bg-white text-gray-500 focus:outline-none"
          onClick={() => {
            dispatch(setNavigationOpen(!open));
          }}
        >
          <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </div>
        </button>
      </div>
      <div
        className="flex cursor-pointer items-center gap-2 rounded-lg p-2 px-4 hover:bg-black/5"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Avatar className="w-10" />
        <p>Demo</p>
      </div>
      <Popover
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="flex w-52 flex-col gap-1 p-2">
          <Link href={"/user/profile"}>
            <Button className="flex w-full items-center justify-start p-2 !capitalize text-black">
              <div className="mr-1 text-xl">
                <LuUser2 />
              </div>
              Profil
            </Button>
          </Link>
          <Divider />
          <Button
            color="error"
            className="flex w-full items-center justify-start p-2 !capitalize"
            onClick={() => setLogout(true)}
          >
            <div className="mr-1 text-xl">
              <MdLogout />
            </div>
            Logout
          </Button>
        </div>
      </Popover>
      <Dialog open={logout} maxWidth="md" onClose={() => setLogout(false)}>
        <form>
          <DialogContent className="p-4">
            Yakin ingin melakukan logout?
          </DialogContent>
          <DialogActions className="pb-5 pr-5">
            <Button color="error" variant="contained" className="capitalize">
              Logout
            </Button>
            <Button
              color="primary"
              className="bg-primary"
              variant="contained"
              onClick={() => setLogout(false)}
            >
              Batal
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default Header;
