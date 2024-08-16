import { TbMoneybag } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdCreditScore } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";

import React from "react";
import "../stylesheets/CustomerDetails.css";
import MetricItem from "./MetricItem";

function CustomerDetails() {
  return (
    <div className="customer-details">
      <div className="metrics">
        <MetricItem>
          <TbMoneybag size={35} />
          Credit Limit:
          <p>$200,000,000</p>
        </MetricItem>
        <MetricItem>
          <MdAttachMoney size={35} />
          Balance:
          <p>$100,000,000</p>
        </MetricItem>
        <MetricItem>
          <FaMoneyBillTransfer size={35} />
          Credit Utilization:
          <p>$100,000,000</p>
        </MetricItem>
        <MetricItem>
          <MdCreditScore size={35} />
          Account Credits:
          <p>$1,000,000</p>
        </MetricItem>
        <MetricItem>
          <FaRegNewspaper size={35} />
          Credit Terms:
          <p>NET 80</p>
        </MetricItem>
        <MetricItem>
          <FcSalesPerformance color="black" size={35} />
          DSO:
          <p>0</p>
        </MetricItem>
      </div>
    </div>
  );
}

export default CustomerDetails;
