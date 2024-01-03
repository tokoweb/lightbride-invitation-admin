"use client";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { HiOutlineTrash } from "react-icons/hi";
import { LuCheckCircle2, LuXCircle } from "react-icons/lu";

import DataGrid from "@/components/data-grid";
import generateTestimonial from "@/lib/utils/faker/generate-testimonial";

const headCells = [
  {
    id: "name",
    label: "nama",
  },
  {
    id: "city",
    label: "kota",
  },
  {
    id: "state",
    label: "provinsi",
  },
  {
    id: "review",
    label: "ulasan",
  },
  {
    id: "action",
    disablePadding: false,
    sorting: false,
    label: "aksi",
    width: "5%",
    className: "pr-6",
    render: ({ active }) => (
      <div className="flex w-full justify-center">
        {active ? (
          <Tooltip title="aktifkan">
            <IconButton color="warning">
              <LuXCircle />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="nonaktifkan">
            <IconButton color="success">
              <LuCheckCircle2 />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="lihat detail">
          <IconButton color="error">
            <HiOutlineTrash />
          </IconButton>
        </Tooltip>
      </div>
    ),
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between px-2">
        <h3>Data Pembayaran</h3>
      </div>
      <div className="mt-6 rounded-xl bg-white p-6">
        <DataGrid headCells={headCells} data={generateTestimonial(25)} />
      </div>
    </>
  );
};
export default Testimonial;
