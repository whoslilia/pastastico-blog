interface CardBodyProps {
  title: string;
  text: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h4 className="card-title">{title}</h4>
      <p className="card-text text">{text}</p>
    </>
  );
}
