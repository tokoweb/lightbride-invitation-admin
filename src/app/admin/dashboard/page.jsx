"use client";

import DashboardCard from "@/components/dashboard/dashboard-card";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

import { PiHandCoins } from "react-icons/pi";
import { PiEyeBold } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { TbClockUp } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import DataGrid from "@/components/data-grid";
import generateInvoice from "@/lib/utils/faker/generate-invoice";
import Link from "next/link";

const headCells = [
  {
    id: "invoiceNumber",
    label: "no invoice",
  },
  {
    id: "name",
    label: "nama",
  },
  {
    id: "domain",
    label: "domain",
    render: ({ domain }) => (
      <Link className="text-blue-500 underline" href={domain.href}>
        {domain.name}
      </Link>
    ),
  },
  {
    id: "status",
    label: "status",
    render: ({ status }) =>
      status === "Lunas" ? (
        <Chip label={status} variant="outlined" color="success" />
      ) : (
        <Chip label={status} variant="outlined" color="warning" />
      ),
  },
  {
    id: "action",
    disablePadding: false,
    sorting: false,
    label: "aksi",
    width: "5%",
    className: "pr-6",
    render: () => (
      <div className="flex w-full justify-center">
        <Tooltip title="lihat detail">
          <IconButton color="info">
            <PiEyeBold />
          </IconButton>
        </Tooltip>
        <Tooltip title="konfirmasi & aktifkan">
          <IconButton color="success">
            <IoMdCheckmarkCircleOutline />
          </IconButton>
        </Tooltip>
      </div>
    ),
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Dashboard</h3>
      </div>
      <div>
        <div className="flex flex-col gap-6 md:flex-row">
          <DashboardCard
            icon={<PiHandCoins />}
            label="Total Keuntungan"
            value={"Rp 270.000"}
          />
          <DashboardCard
            icon={<HiOutlineUserGroup />}
            label="Total Pengguna"
            value={7}
          />
          <DashboardCard
            icon={<TbClockUp />}
            label="Pending Request"
            value={0}
          />
        </div>
      </div>
      <div className="mt-6 rounded-xl bg-white p-6">
        <div className="mb-4 flex justify-between">
          <h3>Invoice</h3>
          <Button variant="contained">{"Lihat Lebih >"}</Button>
        </div>
        <DataGrid headCells={headCells} data={generateInvoice(25)} />
      </div>
    </>
  );
};
export default Dashboard;
