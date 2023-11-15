const TableCollapse = ({ headCells, row }) => {
  return (
    <table>
      <tbody className="text-left">
        {headCells.map(
          (headCell, i) =>
            headCell.id !== "action" && (
              <tr key={i + 1}>
                <th className="capitalize">{headCell.label}</th>
                <th>:</th>
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
