import React from "react";

const StyledSection = ({ children, className = "", ...props }) => (
  <section className={`px-48 ${className}`} {...props}>
    {children}
  </section>
);

export default StyledSection;
