interface AdviceProps {
  title?: string;
  image: string;
  text?: string;
}

function Advice(props: AdviceProps) {
  const { text, image, title } = props;
  return (
    <div style={{ textAlign: "center", padding: "0px" }}>
      <img
        src={image}
        alt={title}
        style={{ maxWidth: "20%", height: "auto" }}
      />
      <h2 style={{ marginTop: "0" }}>{text}</h2>
    </div>
  );
}

export default Advice;
