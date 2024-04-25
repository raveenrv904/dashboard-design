import { TableRow } from "./";

const tableRowData = [
  {
    row1: "Alice Johnson",
    row2: Math.floor(Math.random() * 20) + 1,
    row3: Math.floor(Math.random() * 5) + 1,
    row4: Math.floor(Math.random() * 10) + 1,
  },
  {
    row1: "Bob Smith",
    row2: Math.floor(Math.random() * 20) + 1,
    row3: Math.floor(Math.random() * 5) + 1,
    row4: Math.floor(Math.random() * 10) + 1,
  },
  {
    row1: "Charlie Brown",
    row2: Math.floor(Math.random() * 20) + 1,
    row3: Math.floor(Math.random() * 5) + 1,
    row4: Math.floor(Math.random() * 10) + 1,
  },
  {
    row1: "Diana Miller",
    row2: Math.floor(Math.random() * 20) + 1,
    row3: Math.floor(Math.random() * 5) + 1,
    row4: Math.floor(Math.random() * 10) + 1,
  },
  {
    row1: "Ethan Clark",
    row2: Math.floor(Math.random() * 20) + 1,
    row3: Math.floor(Math.random() * 5) + 1,
    row4: Math.floor(Math.random() * 10) + 1,
  },
  {
    row1: "Fiona Taylor",
    row2: Math.floor(Math.random() * 20) + 1,
    row3: Math.floor(Math.random() * 5) + 1,
    row4: Math.floor(Math.random() * 10) + 1,
  },
  {
    row1: "Gary White",
    row2: Math.floor(Math.random() * 20) + 1,
    row3: Math.floor(Math.random() * 5) + 1,
    row4: Math.floor(Math.random() * 10) + 1,
  },
  {
    row1: "Hannah Young",
    row2: Math.floor(Math.random() * 20) + 1,
    row3: Math.floor(Math.random() * 5) + 1,
    row4: Math.floor(Math.random() * 10) + 1,
  },
  {
    row1: "Ian Brown",
    row2: Math.floor(Math.random() * 20) + 1,
    row3: Math.floor(Math.random() * 5) + 1,
    row4: Math.floor(Math.random() * 10) + 1,
  },
];

const Table = () => {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full table-fixed">
        <colgroup>
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>
        <thead>
          <tr>
            <th className="border py-4">NAME</th>
            <th className="border py-4">PATIENT COUNTS</th>
            <th className="border py-4">LABS</th>
            <th className="border py-4">DIET PLANS</th>
          </tr>
        </thead>
        <tbody>
          {tableRowData.map((datas, index) => (
            <TableRow
              key={index}
              row1={datas.row1}
              row2={datas.row2}
              row3={datas.row3}
              row4={datas.row4}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
