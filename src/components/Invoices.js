import React from "react";
import "../stylesheets/Invoices.css";
import TopheaderInvoice from "./TopheaderInvoice";
import InvoiceTopHeader from "./InvoiceTopHeader";
import InvoiceTable from "./InvoiceTable";

function Invoices() {
  return (
    <>
      <TopheaderInvoice />
      <div className="invoices">
        <div className="invoice-main-heading">
          <p>Invoices</p>
        </div>
        <div className="invoice-details">
          <InvoiceTopHeader />
          <InvoiceTable />
        </div>
      </div>
    </>
  );
}

export default Invoices;
