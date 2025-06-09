import React from "react";

const SectionWrapper = ({ children, className = "" }) => {
  return (
    <section className={`container mx-auto w-full lg:px-32 ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
