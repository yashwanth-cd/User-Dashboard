import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

import React from "react";
import "../stylesheets/Header.css";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="header">
      <SearchBar />
      <div className="icons">
        <div className="icons">
          <IoSettingsOutline className="icon" size={25} />
          <BsFillPatchQuestionFill className="icon" size={25} />
          <AiOutlineExclamationCircle className="icon" size={26} />
          <IoIosNotificationsOutline className="icon" size={27} />
        </div>
        <img
          className="image"
          src="https://i.pravatar.cc/48?u=499476"
          alt="User"
        />
      </div>
    </header>
  );
}

export default Header;
