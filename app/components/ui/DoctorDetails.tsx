"use client";
import React, { use, useState } from "react";
import Availability from "./Availability";

function DoctorDetails() {
  const [isActive, setIsActive] = useState("availability");
  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <button
          onClick={() => setIsActive("details")}
          className={
            isActive === "details"
              ? "py-4 px-8 w-full bg-blue-600 text-white"
              : "border border-slate-100 bg-slate-50 w-full text-slate-800 py-4 px-8"
          }
        >
          Service Details
        </button>
        <button
          onClick={() => setIsActive("availability")}
          className={
            isActive === "availability"
              ? "py-4 px-8 w-full bg-blue-600 text-white"
              : "border border-slate-100 bg-slate-50 w-full text-slate-800 py-4 px-8"
          }
        >
          Availability
        </button>
      </div>
      <div className="py-4 px-8">
        {isActive === "availability" ? (
          <Availability />
        ) : (
          <div>
            <div>Service Detail COMPONENT</div>
          </div>
        )}
      </div>
    </div>
  );
}
export default DoctorDetails;
