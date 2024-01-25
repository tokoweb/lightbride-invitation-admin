"use client";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

import { useRef, useState } from "react";

import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useDebounce from "@/lib/hooks/utils/useDebounce";
import createPagination from "@/lib/utils/createPagination";
import { useGetPaymentsQuery } from "@/redux/services/payment-api";
import { useDeleteCategoryMutation } from "@/redux/services/theme-categories";

import DeleteButtonPopover from "../ui/detele-button-popover";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const PaymentTable = ({ summary = false, defaultData }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useDebounce("", 300);
  const { data } = useGetPaymentsQuery(
    createPagination({ page, search, sort: "id" }),
  );

  const [deletePayment, { isLoading }] = useMutationHandler(
    useDeleteCategoryMutation,
    { success: "Data pembayaran berhasil dihapus!" },
  );

  const columnsDef = [
    {
      field: "user.fullname",
      headerName: "Nama",
      flex: 1,
    },
    {
      field: "user.email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Harga",
      flex: 1,
    },
    {
      field: "status",
      headerName: "status",
      flex: 1,
      cellRenderer: ({ data: { status } }) =>
        status === "PAID" ? (
          <Chip
            label={status}
            variant="outlined"
            size="small"
            color="success"
          />
        ) : (
          <Chip
            label={status}
            variant="outlined"
            size="small"
            color="warning"
          />
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
        <div>
          <DeleteButtonPopover
            loading={isLoading}
            tooltipTitle={"Hapus pembayaran"}
            popoverLabel="Hapus pembayaran ini?"
            onDelete={() => deletePayment(id)}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      {!summary && (
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
      )}
      <div className="ag-theme-quartz h-[500px] w-full">
        <AgGridReact
          columnDefs={columnsDef}
          rowData={defaultData || data || []}
        />
      </div>
      {!summary && (
        <div className="mt-4 flex w-full items-center justify-end gap-2">
          <IconButton
            className="text-base"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <FaChevronLeft />
          </IconButton>
          <p>
            Page {page} / {Math.ceil(data?.length / 10)}
          </p>
          <IconButton
            className="rotate-180 text-base"
            disabled={page === Math.ceil(data?.length / 10)}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <FaChevronLeft />
          </IconButton>
        </div>
      )}
    </>
  );
  // return <DataGrid headCells={headCells} data={[]} />;
};
export default PaymentTable;
