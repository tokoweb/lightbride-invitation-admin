"use client";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

import { useRef, useState } from "react";

import Link from "next/link";

import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useDebounce from "@/lib/hooks/utils/useDebounce";
import createPagination from "@/lib/utils/createPagination";
import { useDeleteFaqMutation, useGetFaqsQuery } from "@/redux/services/faq";

import DeleteButtonPopover from "../ui/detele-button-popover";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const FaqTable = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useDebounce("", 300);
  const { data } = useGetFaqsQuery(createPagination({ page, search }));

  const [deleteFaq, { isLoading }] = useMutationHandler(useDeleteFaqMutation, {
    success: "Data faq berhasil dihapus!",
  });

  const columnsDef = [
    {
      field: "question",
      headerName: "Pertanyaan",
      flex: 1,
    },
    {
      field: "answer",
      headerName: "Jawaban",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Aksi",
      width: 120,
      resizable: false,
      lockPosition: "right",
      sortable: false,
      cellRenderer: ({ data: { id } }) => (
        <div className="flex gap-1">
          <Tooltip title="Ubah faq">
            <Link href={`/admin/faq/${id}`}>
              <IconButton>
                <TbEdit />
              </IconButton>
            </Link>
          </Tooltip>

          <DeleteButtonPopover
            loading={isLoading}
            tooltipTitle={"Hapus faq"}
            popoverLabel="Hapus faq ini?"
            onDelete={() => deleteFaq(id)}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row">
        <h3 className="text-base text-primary md:text-lg">Data Faq</h3>

        <div className="flex gap-4">
          <Link href={"/admin/faq/create"}>
            <Button
              size="small"
              variant="contained"
              endIcon={<MdOutlineAddCircleOutline />}
            >
              Tambah Artikel
            </Button>
          </Link>

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
          Page {page} / {Math.ceil(data?.total / 10)}
        </p>
        <IconButton
          className="rotate-180 text-base"
          disabled={page >= Math.ceil(data?.total / 10)}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <FaChevronLeft />
        </IconButton>
      </div>
    </>
  );
  // return <DataGrid headCells={headCells} data={[]} />;
};
export default FaqTable;
