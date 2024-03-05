const Button = ({ children, className = "", ...args }) => {
  const isPrimary = className.includes("primary");

  return (
    <button
      className={`rounded-md py-6 px-12 uppercase text-white  bg-red-main hover:bg-opacity-85 ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
