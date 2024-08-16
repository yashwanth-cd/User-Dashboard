import { BiSortAlt2 } from "react-icons/bi";

const columns = [
  {
    columnName: "Balance",
  },
  {
    columnName: "Invoice / Due date",
  },
  {
    columnName: "AI Prediction",
  },
  {
    columnName: "Aging",
  },
  {
    columnName: "PTP date",
  },
  {
    columnName: "Status",
  },
  {
    columnName: "Tag",
  },
];

export default function InvoiceTable() {
  return (
    <table>
      <thead>
        <tr className="invoice-column">
          <th className="active col">
            <input type="checkbox" />
            <p>Invoice</p>
            <BiSortAlt2 />
          </th>

          {columns.map((col) => (
            <th className="col">
              <p>{col.columnName}</p>
              <BiSortAlt2 />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{/* Table Data here */}</tbody>
    </table>
  );
}
