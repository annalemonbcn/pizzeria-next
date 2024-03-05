const H2 = ({ children, className = "" }) => {
  return (
    <h2 className={`text-red-main font-extrabold text-3xl ${className}`}>
      {children}
    </h2>
  );
};

export default H2;
