import React from "react";

function SectionHeader({ title }: { title: string }) {
  return (
    <div>
      <h2 className="mb-3 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-[40px]">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;
