import { CgSortAz } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineFileDownload, MdSort } from "react-icons/md";
import { RxDotsVertical } from "react-icons/rx";
import SearchBar from "./SearchBar";

export default function InvoiceTopHeader() {
  return (
    <div className="top-invoice-headers">
      <div className="template-1">
        <SearchBar />
        <span>
          <MdSort /> Density
        </span>
        <span>
          <CgSortAz size={25} />
        </span>
        <span>
          <RxDotsVertical />
        </span>
      </div>
      <div className="template-2">
        <span>
          <FaRegNewspaper /> Account Statement
        </span>
        <span>
          <MdOutlineFileDownload /> Export
        </span>
      </div>
    </div>
  );
}
