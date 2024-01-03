import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";

import PropTypes from "prop-types";

import { useScreenWidth } from "@/lib/hooks/utils/useScreenWidth";
import { cn } from "@/lib/utils";

const TableHeader = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  headCells,
}) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const screenWidth = useScreenWidth();

  return (
    <TableHead>
      <TableRow className="group">
        <TableCell padding="checkbox"></TableCell>
        <TableCell padding="checkbox">
          <div className="flex items-center">
            <Checkbox
              color="default"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
              className="text-white"
            />
            <div className="h-6 w-[2px] rounded-md bg-white bg-opacity-0 transition duration-100 group-hover:bg-opacity-75" />
          </div>
        </TableCell>
        {headCells.map(
          (
            {
              id,
              numeric = false,
              disablePadding = true,
              label,
              sorting = true,
              width,
              align = "left",
              className = "",
            },
            i,
          ) => (
            <TableCell
              key={id}
              style={{ width, textAlign: align }}
              align={numeric ? "right" : "left"}
              padding={disablePadding ? "none" : "normal"}
              sortDirection={orderBy === id ? order : false}
              className={cn("p-0 capitalize text-white", className)}
            >
              <div className="flex items-center justify-between">
                {sorting ? (
                  <TableSortLabel
                    active={orderBy === id}
                    direction={orderBy === id ? order : "asc"}
                    onClick={createSortHandler(id)}
                    className="flex w-full justify-between rounded-md p-2 hover:bg-white/10"
                  >
                    {label}
                    {orderBy === id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                ) : (
                  <div className="p-2">{label}</div>
                )}
                {i !== headCells.length - 1 && (
                  <div className="h-6 w-[2px] rounded-md bg-white bg-opacity-0 transition duration-100 group-hover:bg-opacity-75" />
                )}
              </div>
            </TableCell>
          ),
        )}
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default TableHeader;
