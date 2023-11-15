import { RxDashboard } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

const itemsList = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <RxDashboard />,
  },
  {
    label: "Data Pengguna",
    href: "/admin/pengguna",
    icon: <LuUserCircle2 />,
  },
  {
    label: "Data Pembayaran",
    href: "/admin/pembayaran",
    icon: <LiaMoneyBillWaveSolid />,
  },
];

export default itemsList;
