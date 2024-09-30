"use client";
import React from "react";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";

function Availability() {
  const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date());
  // console.log(bookDate?.get);

  const GMT = bookDate?.toString().split("GMT")[1]?.trim().slice(0, 5); // console.log(GMT);
  console.log(GMT);
  const formattedDate = bookDate
    ? new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(bookDate)
    : "No date selected";
  const formattedDateTime = bookDate
    ? `${formattedDate} - GMT${GMT}`
    : "No date selected";
  // console.log(formattedDateTime);
  // console.log(bookDate);
  const timeStamps = [
    { time: "8:30", period: "AM" },
    { time: "9:30", period: "AM" },
    { time: "10:30", period: "AM" },
    { time: "11:30", period: "AM" },
    { time: "12:30", period: "PM" },
    { time: "1:30", period: "PM" },
    { time: "2:30", period: "PM" },
    { time: "3:30", period: "PM" },
    { time: "4:30", period: "PM" },
    { time: "5:30", period: "PM" },
    { time: "6:30", period: "PM" },
    { time: "7:30", period: "PM" },
    { time: "8:30", period: "PM" },
    { time: "9:30", period: "PM" },
    { time: "10:30", period: "PM" },
    { time: "11:30", period: "PM" },
  ];
  return (
    <div className="mb-[200px] py-4">
      <h2 className="font-bold py-4">Select a Date and Time</h2>
      <div className="grid grid-cols-2 gap-4 lg:gap-0">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={bookDate}
            onSelect={setBookDate}
            className="rounded-md border"
          />
        </div>
        <div className="sm:col-span-1 col-span-full pt-4 px-4">
          <div className="px-4 pd-4 text-blue-700 text-center py-3  border border-blue-500">
            <h2 className="pd-4">{formattedDateTime}</h2>
          </div>
          <div className="py-3 grid grid-cols-3 gap-4 ">
            {timeStamps.slice(0, 5).map((item, index) => {
              return (
                <Link
                  className="bg-blue-500 text-center text-white p-2 "
                  href="#"
                  key={index}
                >
                  <p className="truncate">
                    {item.time}
                    {item.period}
                  </p>
                </Link>
              );
            })}
            <Link
              href="/doctors/slug"
              className="text-[0.8rem] bg-blue-900 text-center text-white truncate p-2"
            >
              More times
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Availability;
