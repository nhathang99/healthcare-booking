import DoctorDetails from "@/app/components/ui/DoctorDetails";
import Image from "next/image";
import React from "react";
import CustomBookButton from "../../../components/ui/CustomBookButton";

function page() {
  return (
    <div className="bg-slate-50 py-20 min-h-screen">
      <div className=" bg-white max-w-4xl border border-gray-200 mx-auto shadow-lg rounded-sd">
        <div className="px-6 py-6 flex items-center justify-between">
          <div>
            <div className="flex flex-col">
              <h1 className="uppercase font-bold text-xl tracking-widest">
                doctor name
              </h1>
              <p className="text-gray-400 uppercase text-xs">Adult Health</p>
            </div>
            <div className="py-2">
              <p>In-person doctor visit</p>
              <p>Address</p>
            </div>
          </div>
          <Image
            className="w-24 h-24 rounded-full"
            src="/assets/images/onboarding.png"
            alt="doctor"
            width={207}
            height={207}
          />
        </div>
        <DoctorDetails />
      </div>
      <CustomBookButton />
    </div>
  );
}

export default page;
