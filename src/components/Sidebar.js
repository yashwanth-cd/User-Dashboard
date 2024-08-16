import { GoNote } from "react-icons/go";

import React from "react";
import "../stylesheets/Sidebar.css";

const menuItems = [
  { menuItem: "Dashboard", isActive: false },
  { menuItem: "Customers", isActive: true },
  { menuItem: "Invoicing", isActive: false },
  { menuItem: "Payments", isActive: false },
  { menuItem: "Collections", isActive: false },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {menuItems.map((item) => (
        <div
          className={item.isActive ? "menu-item active" : "menu-item"}
          key={item.menuItem}
        >
          <GoNote size={25} />
          <p>{item.menuItem}</p>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
