import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UserDetails from "./components/UserDetails";
import AccountReceivable from "./components/AccountReceivable";
import StatusBar from "./components/StatusBar";
import CustomerDetails from "./components/CustomerDetails";
import Invoices from "./components/Invoices";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <div className="seperator">
            <div>
              <UserDetails />
            </div>
            <div>
              <AccountReceivable />
              <StatusBar />
            </div>
          </div>
          <CustomerDetails />
          <Invoices />
        </div>
      </div>
    </div>
  );
}

export default App;
