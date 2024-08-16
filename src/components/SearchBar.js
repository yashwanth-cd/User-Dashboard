import { CiSearch } from "react-icons/ci";
import { IoAppsSharp } from "react-icons/io5";
import "../stylesheets/Header.css";

export default function SearchBar() {
  return (
    <div className="search">
      <IoAppsSharp size={25} color="#2a94e3" />
      <CiSearch className="search-icon" />
      <input type="text" placeholder="Search..." className="search-bar" />
    </div>
  );
}
