const Button = ({ children, className = "", ...args }) => (
  <button
    className={`rounded-[50px] py-4 px-14 uppercase text-white bg-red-main hover:bg-opacity-90 transition-all ${className}`}
    {...args}
  >
    {children}
  </button>
);

export default Button;
