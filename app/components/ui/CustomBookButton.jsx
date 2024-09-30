import React from "react";
import { Button } from "@/components/ui/button";

function CustomBookButton() {
  return (
    <div className=" fixed bottom-0 w-full bg-white shadow-xl  py-8 px-6 rounded-sm  justify-between flex border border-gray-200 ">
      <div className="flex justify-between w-full">
        <div>
          <p>$52</p>
          <p>Tue, Mar 12-8:00 AM GMT+3</p>
        </div>
        <Button
          variant="outline"
          className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-500 hover:text-slate-50"
        >
          Booking
        </Button>
      </div>
    </div>
  );
}
export default CustomBookButton;
