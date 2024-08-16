import { FaMapMarkerAlt } from "react-icons/fa";

import "../stylesheets/UserDetails.css";

export default function UserDetails() {
  return (
    <div className="user-info-card">
      <div className="user-details">
        <FaMapMarkerAlt className="map-icon" />
        <h2>ENRICH JOHN CARPENTER</h2>
        <p>MFG. COMPANY OF COLORADO</p>
        <p>
          A/C #: <span className="account-number">83045</span> [Enrich
          Portfolio(P01)]
        </p>
        <p className="review">Last Review: Sep 26, 2022</p>
        <p>
          Next Review: Sep 21, 2023{" "}
          <span className="past-review">7 days Past Review</span>
        </p>
      </div>
    </div>
  );
}
