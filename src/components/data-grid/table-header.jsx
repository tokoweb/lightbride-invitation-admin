import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import { cn } from "@/lib/utils";
import { useScreenWidth } from "@/lib/hooks/useScreenWidth";

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
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        <TableCell padding="checkbox">
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
        </TableCell>
        {headCells.map(
          ({
            id,
            numeric = false,
            disablePadding = true,
            label,
            sorting = true,
            width,
            align = "left",
            className = "",
          }) => (
            <TableCell
              key={id}
              style={{ width, textAlign: align }}
              align={numeric ? "right" : "left"}
              padding={disablePadding ? "none" : "normal"}
              sortDirection={orderBy === id ? order : false}
              className={cn("capitalize text-white", className)}
            >
              {sorting ? (
                <TableSortLabel
                  active={orderBy === id}
                  direction={orderBy === id ? order : "asc"}
                  onClick={createSortHandler(id)}
                  className="[&.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiTableSortLabel-icon]:text-white"
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
                label
              )}
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
