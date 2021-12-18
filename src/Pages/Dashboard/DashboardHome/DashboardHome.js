import React from "react";
import Dashborad1 from "../../../images/dashboard1.png";

const DashboardHome = () => {
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <h1 className="py-3 fw-bold">Dashboard Home</h1>
      <img src={Dashborad1} alt="" className="pb-5 w-50" />
    </div>
  );
};

export default DashboardHome;
