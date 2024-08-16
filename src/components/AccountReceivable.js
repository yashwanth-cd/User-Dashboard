import React from "react";
import "../stylesheets/AccountReceivable.css";

const accountDetails = [
  {
    label: "CREDIT LIMIT",
    value: "$35.0",
  },
  {
    label: "BALANCE",
    value: "$0K",
  },
  {
    label: "NET EXPOSURE",
    value: "$0.00",
  },
  {
    label: "A/C CREDIT",
    value: "$0.00",
  },
  {
    label: "CR RTG",
    value: "Cr5",
  },
  {
    label: "CR TERM",
    value: "N30",
  },
];

function AccountReceivable() {
  return (
    <div className="account-receivable">
      {accountDetails.map((item) => (
        <div className="info-box" key={item.label}>
          {item.label}
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default AccountReceivable;
