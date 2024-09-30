"use client";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ServiceList from "./service/ServiceList";
import { Component } from "lucide-react";
import LinkCards from "./Doctor/LinkCards";
import { title } from "process";
import Image from "next/image";

const CustomTabs = () => {
  const services = [
    {
      title: "Telehealth",
      image: "/assets/images/onboarding.png",
      slug: "telehealth",
    },
    {
      title: "Video prescription refill",
      image: "/assets/images/onboarding.png",
      slug: "telehealth",
    },
    {
      title: "In-person doctor visit",
      image: "/assets/images/onboarding.png",
      slug: "telehealth",
    },
    {
      title: "UTI consult",
      image: "/assets/images/onboarding.png",
      slug: "telehealth",
    },
    {
      title: "Mental health consult",
      image: "/assets/images/onboarding.png",
      slug: "telehealth",
    },
    {
      title: "Urgent care visit",
      image: "/assets/images/onboarding.png",
      slug: "telehealth",
    },
  ];

  const TabName = [
    {
      title: "Top booked",
      content: "",
      Component: <ServiceList services={services} />,
    },
    {
      title: "Doctors",
      content: "",
      Component: <LinkCards />,
    },
    {
      title: "Specialties",
      content: "",
      Component: <LinkCards className="bg-blue-500" />,
    },
    {
      title: "Symptoms",
      content: "",
      Component: <LinkCards />,
    },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <Tabs
        aria-label="Tabs with icons"
        variant="underline"
        className="flex flex-wrap "
      >
        {TabName.map((tab, i) => (
          <Tabs.Item active title={tab?.title} key={i}>
            {tab?.Component}
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
  );
};

export default CustomTabs;
