import React from "react";
import SectionHeader from "./SectionHeader";
import ToggleButton from "./ToggleButton";
import Link from "next/link";
import DoctorCard from "./DoctorCard";
import { Map } from "lucide-react";
import DoctorListCarousel from "./DoctorListCarousel";

function DoctorList({
  title = "",
  isInPerson,
  className = "bg-pink-100 py-8 lg:py-24",
}: {
  title?: string;
  isInPerson?: boolean;
  className?: string;
}) {
  const doctors = [
    {
      name: "doctor name",
    },
    {
      name: "doctor name  2",
    },
    {
      name: "doctor name3",
    },
    {
      name: "doctor name",
    },
    {
      name: "doctor name",
    },
    {
      name: "doctor name",
    },
  ];
  return (
    <div className={className}>
      <div className="max-w-6xl mx-auto ">
        <SectionHeader title={title} />
        <div className="py-4 flex items-center justify-between border-gray-300">
          {isInPerson ? (
            <Link
              href=""
              className="text-blue-500 font-semibold text-sm flex items-center"
            >
              <Map className="mr-2 flex-shrink-0 h-4 w-4" />
              <span>Map view</span>
            </Link>
          ) : (
            <ToggleButton />
          )}
          <Link className="py-3 px-6 border border-blue-600 bg-white" href="#">
            See All
          </Link>
        </div>
        <div className="py-6">
          <DoctorListCarousel doctors={doctors} isInperson={isInPerson} />
        </div>
      </div>
    </div>
  );
}

export default DoctorList;
