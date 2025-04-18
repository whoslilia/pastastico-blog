import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  image: string;
}

function Card(props: CardProps) {
  const { children, image } = props;
  return (
    <div className="card h-100 shadow-sm rounded ">
      <div className="img-config overflow-hidden rounded-top">
        <img
          src={image}
          alt="pasta"
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
