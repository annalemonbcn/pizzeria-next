import React from "react";

const TrashSvg = (props) => {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      {...props}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Shape"
          fill="#000000"
          transform="translate(64.000000, 42.666667)"
        >
          <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"></path>
        </g>
      </g>
    </svg>
  );
};

export default TrashSvg;
