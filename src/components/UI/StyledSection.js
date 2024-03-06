import React from "react";

const StyledSection = ({ children, className = "", ...props }) => (
  <section className={`px-6 md:px-14 lg:px-48 ${className}`} {...props}>
    {children}
  </section>
);

export default StyledSection;
