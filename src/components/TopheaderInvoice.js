import { RxDotsHorizontal } from "react-icons/rx";
import "../stylesheets/Invoices.css";

const headers = [
  {
    label: "Invoices",
    isActive: true,
  },
  {
    label: "Payments",
  },
  {
    label: "Claims",
  },
  {
    label: "Collections",
  },
  {
    label: "Promise to Pay",
  },
  {
    label: "Documents",
  },
  {
    label: "Notes",
  },
  {
    label: "Activities",
  },
  {
    label: "Contacts",
  },
];

export default function TopheaderInvoice() {
  return (
    <div className="top-headers">
      {headers.map((header) => (
        <p className={header.isActive ? "active" : ""}>{header.label}</p>
      ))}
      <p>
        <RxDotsHorizontal size={35} className="top-header-icon" />
      </p>

      <div className="invoice-buttons">
        <button className="invoice-tab active">
          Open Invoices <span className="open-invoice">10</span>
        </button>
        <button className="invoice-tab">
          Closed Invoices <span className="close-invoice">10</span>
        </button>
      </div>
    </div>
  );
}
