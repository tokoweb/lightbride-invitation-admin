"use client";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

import { useRef, useState } from "react";

import Button from "@mui/material/Button";
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
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

import useMutationHandler from "@/lib/hooks/services/useMutationHandler";
import useDebounce from "@/lib/hooks/utils/useDebounce";
import createPagination from "@/lib/utils/createPagination";
import {
  useDeleteThemeMutation,
  useGetThemesQuery,
  useUpdateThemeMutation,
} from "@/redux/services/themes-api";

import DeleteButtonPopover from "../ui/detele-button-popover";
import ThemeFormModal from "./form-modal";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const ThemesTable = () => {
  const [updateModal, setUpdateModal] = useState(null);
  const [createModal, setCreateModal] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useDebounce("", 300);
  const { data, isLoading, isFetching } = useGetThemesQuery(
    createPagination({ page, search }),
  );
  const [updateTheme, { isLoading: updateLoading }] = useMutationHandler(
    useUpdateThemeMutation,
    {
      success: "Data tema berhasil diubah!",
    },
  );
  const [deleteTheme, { isLoading: deleteLoading }] = useMutationHandler(
    useDeleteThemeMutation,
    {
      success: "Data tema berhasil dihapus!",
    },
  );

  const columnsDef = [
    {
      field: "name_theme",
      headerName: "Nama Tema",
      flex: 1,
    },
    {
      field: "directory",
      headerName: "Direktori Folder Tema",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Aksi",
      width: 150,
      resizable: false,
      lockPosition: "right",
      sortable: false,
      cellRenderer: ({ data }) => {
        const { id, is_active } = data;

        return (
          <div className="flex w-full justify-end">
            <Tooltip title="Ubah tema">
              <span>
                <IconButton onClick={() => setUpdateModal(id)}>
                  <TbEdit />
                </IconButton>
              </span>
            </Tooltip>

            {is_active ? (
              <Tooltip title="Nonaktifkan">
                <span>
                  <IconButton
                    disabled={isLoading || isFetching}
                    color="success"
                    onClick={() =>
                      updateTheme({ id, data: { is_active: false } })
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
                      updateTheme({ id, data: { is_active: true } })
                    }
                  >
                    <LuXCircle />
                  </IconButton>
                </span>
              </Tooltip>
            )}

            <DeleteButtonPopover
              loading={deleteLoading}
              tooltipTitle={"Hapus tema"}
              popoverLabel="Hapus Tema Ini?"
              onDelete={() => deleteTheme(id)}
            />

            {/* edit modal */}
            <ThemeFormModal
              id={id}
              defaultValues={{
                ...data,
                theme_category_id: data.themeCategory,
                theme_sub_category_id: data.themeSubCategory,
              }}
              open={updateModal === id}
              setOpen={setUpdateModal}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row">
        <h3 className="text-base text-primary md:text-lg">Data Tema</h3>

        <div>
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

          <Button
            className="ml-4"
            size="small"
            variant="contained"
            endIcon={<MdOutlineAddCircleOutline />}
            onClick={() => setCreateModal(true)}
          >
            Tambah Tema
          </Button>
        </div>
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

      <ThemeFormModal open={createModal} setOpen={setCreateModal} />
    </>
  );
};

export default ThemesTable;
