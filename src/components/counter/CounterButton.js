const CounterButton = ({ children, ...props }) => {
  return (
    <div
      className="flex items-center justify-center w-5 h-4 rounded-sm bg-red-main cursor-pointer"
      {...props}
    >
      <span className="text-white">{children}</span>
    </div>
  );
};

export default CounterButton;
