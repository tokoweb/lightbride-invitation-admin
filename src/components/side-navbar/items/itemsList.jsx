import { RxDashboard } from "react-icons/rx";
import { LuUserCircle2 } from "react-icons/lu";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { GoCodeReview } from "react-icons/go";
import { RiBrush3Line } from "react-icons/ri";
import { TbAdjustments } from "react-icons/tb";

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
  {
    label: "Testimonial",
    href: "/admin/testimonial",
    icon: <GoCodeReview />,
  },
  {
    label: "Tema",
    href: "/admin/tema",
    icon: <RiBrush3Line />,
  },
  {
    label: "Setting",
    href: "/admin/setting",
    icon: <TbAdjustments />,
  },
];

export default itemsList;
