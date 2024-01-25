"use client";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

import useDebounce from "@/lib/hooks/utils/useDebounce";
import createPagination from "@/lib/utils/createPagination";
import { useGetUsersQuery } from "@/redux/services/users-api";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const UsersTable = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useDebounce("", 300);
  const { data } = useGetUsersQuery(createPagination({ page, search }));

  console.log(data);

  const columnsDef = [
    {
      field: "fullname",
      headerName: "Nama",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
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
        <AgGridReact columnDefs={columnsDef} rowData={data} />
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
    </>
  );
};

export default UsersTable;
