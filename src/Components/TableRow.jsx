// eslint-disable-next-line react/prop-types
const TableRow = ({ row1, row2, row3, row4 }) => {
  return (
    <tr className="text-center">
      <td className="py-4 border">{row1}</td>
      <td className="py-4 border">{row2}</td>
      <td className="py-4 border">{row3}</td>
      <td className="py-4 border">{row4}</td>
    </tr>
  );
};

export default TableRow;
