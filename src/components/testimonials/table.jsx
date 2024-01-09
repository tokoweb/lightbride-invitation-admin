"use client";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

import { useRef, useState } from "react";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { LuCheckCircle2, LuXCircle } from "react-icons/lu";

import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useDebounce from "@/lib/hooks/utils/useDebounce";
import createPagination from "@/lib/utils/createPagination";
import {
  useGetTestimonialsQuery,
  useUpdateTestimonialMutation,
} from "@/redux/services/testimonial-api";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const TestimonialsTable = () => {
  const grid = useRef(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useDebounce("", 300);
  const { data, isLoading, isFetching } = useGetTestimonialsQuery(
    createPagination({ page, search }),
  );
  const [updateTestimonial] = useMutationHandler(useUpdateTestimonialMutation, {
    success: "Data testimoni berhasil diubah!",
  });

  const columnsDef = [
    {
      field: "fullname",
      headerName: "Nama",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Alamat",
      flex: 1,
    },
    {
      field: "review",
      headerName: "Ulasan",
      flex: 2,
    },
    {
      field: "action",
      headerName: "Aksi",
      width: 75,
      resizable: false,
      lockPosition: "right",
      sortable: false,
      cellRenderer: ({ data: { id, is_active } }) => (
        <div className="flex w-full justify-end">
          {is_active ? (
            <Tooltip title="Nonaktifkan">
              <span>
                <IconButton
                  disabled={isLoading || isFetching}
                  color="success"
                  onClick={() =>
                    updateTestimonial({ id, data: { is_active: false } })
                  }
                >
                  <LuCheckCircle2 />
                </IconButton>
              </span>
            </Tooltip>
          ) : (
            <Tooltip title="Aktifkan">
              <span>
                <IconButton
                  disabled={isLoading || isFetching}
                  color="error"
                  onClick={() =>
                    updateTestimonial({ id, data: { is_active: true } })
                  }
                >
                  <LuXCircle />
                </IconButton>
              </span>
            </Tooltip>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row">
        <h3 className="text-base text-primary md:text-lg">Data Testimoni</h3>
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
        <AgGridReact
          ref={grid}
          columnDefs={columnsDef}
          rowData={data?.results}
        />
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

export default TestimonialsTable;
