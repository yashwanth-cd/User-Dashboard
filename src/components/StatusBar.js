import React from "react";
import "../stylesheets/StatusBar.css";

const StatusBar = () => {
  const data = [
    { label: "Current", value: "$20.2M", color: "#2DA15F" },
    { label: "1 - 30 days", value: "$6.2M", color: "#82BE5B" },
    { label: "31 - 60 days", value: "$3.2M", color: "#A47A47" },
    { label: "61 - 90 days", value: "$2.2M", color: "#A47A47" },
    { label: "91 - 120 days", value: "$800.0K", color: "#A44127" },
    { label: "121+ days", value: "$12.2M", color: "#8D3C25" },
  ];

  return (
    <div className="status-bar">
      {data.map((item, index) => (
        <div key={index} className="status-item">
          <div className="value" style={{ color: item.color }}>
            {item.value}
          </div>
          <div className="label">{item.label}</div>
          <div className="bar" style={{ backgroundColor: item.color }}></div>
        </div>
      ))}
    </div>
  );
};

export default StatusBar;
