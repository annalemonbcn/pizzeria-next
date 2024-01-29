const Button = ({ children, className = "", ...args }) => {
  const isPrimary = className.includes("primary");
  console.log("isPrimary", isPrimary);

  return (
    <button
      className={`border rounded-[50px] py-3 px-6 ${
        isPrimary
          ? "text-mainRed hover:text-white bg-white hover:bg-mainRed  border-mainRed hover:border-white"
          : ""
      }`}
      style={{ boxShadow: "5px 3px 0px 0px #ac1823" }}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
