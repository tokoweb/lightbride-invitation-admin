import { useState, useMemo, useEffect } from "react";
import PropTypes, { InferProps } from "prop-types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import TableHeader from "./table-header";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

import { LuChevronUp } from "react-icons/lu";
import { useScreenWidth } from "@/lib/hooks/useScreenWidth";
import TableCollapse from "./table-collapse";

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const propType = {
  headCells: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      disablePadding: PropTypes.bool,
      sorting: PropTypes.bool,
      label: PropTypes.string.isRequired,
      width: PropTypes.string,
      className: PropTypes.string,
      render: PropTypes.func,
    }).isRequired,
  ),
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const DataGrid = ({ headCells, data }) => {
  const [collapsed, setCollapsed] = useState();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [visibleCells, setVisibleCells] = useState(headCells);

  const screenWidth = useScreenWidth();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const selectClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const visibleRows = useMemo(
    () =>
      stableSort(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  useEffect(() => {
    if (screenWidth < 1024) {
      setVisibleCells([headCells[0], headCells[headCells.length - 1]]);
    } else {
      setVisibleCells(headCells);
    }
  }, [screenWidth]);

  return (
    <div className="w-full">
      <div className="mb-2 w-full overflow-hidden rounded-md">
        <TableContainer>
          <Table className="min-w-[500px]">
            <TableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
              headCells={visibleCells}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <>
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      className="group cursor-pointer"
                      sx={{ "& > *": { borderBottom: "unset" } }}
                    >
                      <TableCell padding="checkbox">
                        <IconButton
                          className={`${
                            collapsed === row.id ? "rotate-180" : "rotate-0"
                          } p-2 transition duration-200`}
                          onClick={() =>
                            collapsed === row.id
                              ? setCollapsed(null)
                              : setCollapsed(row.id)
                          }
                        >
                          <LuChevronUp />
                        </IconButton>
                      </TableCell>
                      <TableCell padding="checkbox">
                        <div className="flex items-center justify-between">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                            onClick={(event) => selectClick(event, row.id)}
                          />
                          <div className="h-6 w-[2px] rounded-md bg-black bg-opacity-0 transition duration-100 group-hover:bg-opacity-30" />
                        </div>
                      </TableCell>
                      {visibleCells.map((cell, i) => (
                        <TableCell
                          key={i}
                          style={{ width: row.width, textAlign: row.align }}
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <div className="flex items-center justify-between">
                            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap p-2">
                              {cell.render ? cell.render(row) : row[cell.id]}
                            </div>
                            {i !== visibleCells.length - 1 && (
                              <div className="h-6 w-[2px] rounded-md bg-black bg-opacity-0 transition duration-100 group-hover:bg-opacity-30" />
                            )}
                          </div>
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow className="h-fit w-full">
                      <TableCell
                        style={{
                          paddingBottom: 0,
                          paddingTop: 0,
                        }}
                        colSpan={screenWidth < 1024 ? 4 : headCells.length + 2}
                        className="bg-gray-50 px-8"
                      >
                        <Collapse
                          in={collapsed === row.id}
                          timeout={"auto"}
                          unmountOnExit
                          className="py-4"
                        >
                          <TableCollapse row={row} headCells={headCells} />
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

DataGrid.propTypes = propType;

export default DataGrid;
