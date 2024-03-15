const Button = ({ children, className = "", variant = 'default', ...args }) => (
  <button
    className={`rounded-[50px]  ${variant === 'small' ? 'text-sm py-2 px-6' : 'py-4 px-14'} uppercase text-white bg-red-main hover:bg-opacity-90 transition-all ${className}`}
    {...args}
  >
    {children}
  </button>
);

export default Button;
