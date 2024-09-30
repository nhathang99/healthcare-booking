import { Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DoctorCard({ isInPerson = false }: { isInPerson?: boolean }) {
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
    <div className="hover:bg-gray-50 border border-gray-200  transition-all transborder py-6 px-3 border-gray-200  object-cover flex-col bg-white inline-flex rounded-xl">
      <Link href="/doctors/slug">
        <h2 className="uppercase font-bold text-2xl tracking-widest">
          Doctor NAME
        </h2>
        {isInPerson && <p className="py-3">location</p>}
        <div className="flex items-center gap-4 py-4">
          <div className="relative">
            <Image
              className="w-24 h-24 rounded-full"
              src="/assets/images/onboarding.png"
              alt="doctor"
              width={243}
              height={207}
            />
            {isInPerson && (
              <p className="absolute bottom-0 right-1 bg-blue-200 text-blue-700 w-9 h-9 flex items-center justify-center rounded-full  ">
                <Video className="w-5 h-5" />
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>family medicine</span>
            </p>
            <p className="bg-green-200 py-3 px-6 uppercase  ">
              Available today
            </p>
          </div>
        </div>
      </Link>
      <div className="pt-6 border-t border-gray-400">
        <h3 className="flex gap 4 justify-between items-center">
          <span className="text-gray-600">Tue. Mar 12</span>
          <span className="font-bold">$127</span>
        </h3>
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
  );
}

export default DoctorCard;
