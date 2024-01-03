"use client";

import Link from "next/link";

import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { LuCheckCircle2 } from "react-icons/lu";
import { PiEyeBold } from "react-icons/pi";

import generateInvoice from "@/lib/utils/faker/generate-invoice";

import DataGrid from "../data-grid";

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
            <LuCheckCircle2 />
          </IconButton>
        </Tooltip>
      </div>
    ),
  },
];

const InvoiceTable = () => {
  return <DataGrid headCells={headCells} data={[]} />;
};
export default InvoiceTable;
