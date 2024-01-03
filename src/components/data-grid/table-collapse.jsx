const TableCollapse = ({ headCells, row }) => {
  return (
    <table className="w-full">
      <tbody className="text-left">
        {headCells.map(
          (headCell, i) =>
            headCell.id !== "action" && (
              <tr key={i + 1}>
                <th className="w-[30%] capitalize md:w-[15%]">
                  {headCell.label}
                </th>
                <th className="w-[1%]">:</th>
                <th>
                  {headCell.render ? headCell.render(row) : row[headCell.id]}
                </th>
              </tr>
            ),
        )}
      </tbody>
    </table>
  );
};
export default TableCollapse;
