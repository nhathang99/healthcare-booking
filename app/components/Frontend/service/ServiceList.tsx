import React from "react";
import ServiceCard from "./ServiceCard";
import { servicePorps } from "@/types/types";

const ServiceList = ({ services }: { services: servicePorps[] }) => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
