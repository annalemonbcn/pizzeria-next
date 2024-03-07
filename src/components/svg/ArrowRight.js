const ArrowRight = ({ className = "", ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className={className}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" />
    </svg>
  );
};

export default ArrowRight;
