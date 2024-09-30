"use client";
import { Card } from "flowbite-react";
import React from "react";
import ServiceList from "./ServiceList";
import Link from "next/link";
import Image from "next/image";
import { servicePorps } from "@/types/types";

const ServiceCard = ({ service }: { service: servicePorps }) => {
  return (
    <div className="">
      <Link
        href={`service/${service.slug}`}
        className="rounded-md bg-slate-400 hover:bg-slate-500 duration-300 flex gap-4 overflow-clip"
      >
        <Image
          src={service.image}
          width={1170}
          height={848}
          alt={service.title}
          className="w-1/3 object-cover aspect-video "
        />
        <div className="flex flex-col w-2/3 py-4">
          <h2>{service.title}</h2>
          <p className="text-[0.8rem]">doctor available</p>
        </div>
      </Link>
    </div>
    // <Link href="#">
    //   <Card
    //     className="max-w-sm"
    //     imgSrc="/assets/images/onboarding.png"
    //     horizontal
    //   >
    //     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //       Noteworthy technology acquisitions 2021
    //     </h5>
    //     <p className="font-normal text-gray-700 dark:text-gray-400">
    //       Here are the biggest enterprise technology acquisitions of 2021 so
    //       far, in reverse chronological order.
    //     </p>
    //   </Card>
    // </Link>
  );
};

export default ServiceCard;
