"use client";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

import { useRef, useState } from "react";

import Link from "next/link";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import dayjs from "dayjs";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { TbEdit } from "react-icons/tb";

import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useDebounce from "@/lib/hooks/utils/useDebounce";
import createPagination from "@/lib/utils/createPagination";
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
} from "@/redux/services/orders-api";

import DeleteButtonPopover from "../ui/detele-button-popover";
import UserFormModal from "./form-modal";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const UsersTable = () => {
  const [page, setPage] = useState(1);
  const [updateModal, setUpdateModal] = useState(false);
  const [search, setSearch] = useDebounce("", 300);
  const { data, isLoading, isFetching } = useGetOrdersQuery(
    createPagination({ page, search, sort: "id" }),
  );

  const [deleteCategory, { isLoading: deleteLoading }] = useMutationHandler(
    useDeleteOrderMutation,
    {
      success: "Data pengguna berhasil dihapus",
    },
  );

  const columnsDef = [
    {
      field: "fullname",
      headerName: "Nama",
      flex: 2,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
    },
    {
      field: "domain",
      headerName: "Domain",
      flex: 2,
      cellRenderer: ({ data: { domain } }) => (
        <Link className="text-blue-400 underline" href={`/${domain}`}>
          ondangan.id/{domain}
        </Link>
      ),
    },
    {
      field: "active_date",
      headerName: "Aktif Sampai",
      flex: 2,
      cellRenderer: () => (
        <p className="text-success">{dayjs().format("DD/MM/YYYY")}</p>
      ),
    },
    {
      field: "action",
      headerName: "Aksi",
      width: 100,
      resizable: false,
      lockPosition: "right",
      sortable: false,
      cellRenderer: ({ data: { id } }) => (
        <div className="flex w-full justify-end">
          <Tooltip title="Ubah tema">
            <span>
              <IconButton onClick={() => setUpdateModal(id)}>
                <TbEdit />
              </IconButton>
            </span>
          </Tooltip>

          <DeleteButtonPopover
            loading={deleteLoading}
            tooltipTitle={"Hapus pengguna"}
            popoverLabel="Hapus pengguna Ini?"
            onDelete={() => deleteCategory(id)}
          />

          <UserFormModal
            id={id}
            open={updateModal === id}
            setOpen={setUpdateModal}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row">
        <h3 className="text-base text-primary md:text-lg">Data Pengguna</h3>
        <TextField
          className="max-w-72 flex-1"
          size="small"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="ag-theme-quartz h-[500px] w-full">
        <AgGridReact columnDefs={columnsDef} rowData={data?.results} />
      </div>
      <div className="mt-4 flex w-full items-center justify-end gap-2">
        <IconButton
          className="text-base"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <FaChevronLeft />
        </IconButton>
        <p>
          Page {page} / {Math.ceil(data?.results.length / 10)}
        </p>
        <IconButton
          className="rotate-180 text-base"
          disabled={page === Math.ceil(data?.results.length / 10)}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <FaChevronLeft />
        </IconButton>
      </div>
    </>
  );
};

export default UsersTable;
