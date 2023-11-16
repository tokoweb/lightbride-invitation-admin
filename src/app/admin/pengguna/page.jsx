"use client";

import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

import { HiOutlineTrash } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";

import DataGrid from "@/components/data-grid";
import generateUser from "@/lib/utils/faker/generate-user";
import Link from "next/link";
import dayjs from "dayjs";

const headCells = [
  {
    id: "email",
    label: "email",
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
    id: "expired",
    label: "exp",
    render: ({ expired }) => dayjs(expired).format("DD-MM-YYYY hh:mm A"),
  },
  {
    id: "status",
    label: "status",
    render: ({ status }) =>
      status === "Aktif" ? (
        <Chip label={status} variant="outlined" color="success" />
      ) : (
        <Chip label={status} variant="outlined" color="error" />
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
        <Tooltip title="konfirmasi & aktifkan">
          <IconButton color="info">
            <FiEdit />
          </IconButton>
        </Tooltip>
        <Tooltip title="hapus">
          <IconButton color="error">
            <HiOutlineTrash />
          </IconButton>
        </Tooltip>
      </div>
    ),
  },
];

const Pengguna = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Data Pengguna</h3>
      </div>
      <div className="mt-6 rounded-xl bg-white p-6">
        <DataGrid headCells={headCells} data={generateUser(25)} />
      </div>
    </>
  );
};
export default Pengguna;
