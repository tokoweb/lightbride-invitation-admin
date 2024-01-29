import { FaRegQuestionCircle } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LuUserCircle2 } from "react-icons/lu";
import { MdOutlineArticle } from "react-icons/md";
import { RiBrush3Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TbAdjustments, TbDatabase, TbMoneybag } from "react-icons/tb";

const itemsList = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <RxDashboard />,
  },
  {
    label: "Master Data",
    icon: <TbDatabase />,
    children: [
      {
        label: "Kategori Tema",
        href: "/admin/kategori-tema",
      },
      {
        label: "Sub-Kategori Tema",
        href: "/admin/sub-kategori-tema",
      },
      {
        label: "Data Pengguna",
        href: "/admin/pengguna",
      },
    ],
  },
  {
    label: "Data Orderan",
    href: "/admin/orders",
    icon: <TbMoneybag />,
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
    label: "Artikel",
    href: "/admin/artikel",
    icon: <MdOutlineArticle />,
  },
  {
    label: "FAQ",
    href: "/admin/faq",
    icon: <FaRegQuestionCircle />,
  },
  {
    label: "Setting",
    href: "/admin/setting",
    icon: <TbAdjustments />,
  },
];

export default itemsList;
