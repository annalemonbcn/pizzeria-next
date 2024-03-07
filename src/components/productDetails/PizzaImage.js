import Image from "next/image"

const PizzaImage = ({ currentPizza, className = "" }) => {
  const { image, alt } = currentPizza;
  return (
    <div className={className}>
      <Image src={image} alt={`pizza ${alt}`} width={600} height={600} />
    </div>
  );
};

export default PizzaImage;
