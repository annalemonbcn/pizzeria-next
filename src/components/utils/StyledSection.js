const StyledSection = ({ children, className = "", homeSection, ...props }) => (
  <section
    className={`px-6 pb-10 md:px-28 lg:px-48 relative ${
      !homeSection ? "top-16 md:top-24" : ""
    } ${className}`}
    {...props}
  >
    {children}
  </section>
);

export default StyledSection;
