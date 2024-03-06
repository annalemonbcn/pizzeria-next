const StyledSection = ({ children, className = "", homeSection, ...props }) => (
  <section
    className={`px-6 md:px-14 lg:px-48 relative ${
      !homeSection ? "top-20" : ""
    } ${className}`}
    {...props}
  >
    {children}
  </section>
);

export default StyledSection;
