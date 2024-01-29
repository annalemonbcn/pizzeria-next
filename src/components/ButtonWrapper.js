"use client";
import Button from "./Button";

const ButtonWrapper = ({ children, productName }) => {
  return (
    <div>
      <Button
        className="primary"
        onClick={() => console.log(`Product ${productName} added to cart`)}
      >
        {children}
      </Button>
    </div>
  );
};

export default ButtonWrapper;
