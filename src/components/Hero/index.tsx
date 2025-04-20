import "./Hero.css";

interface HeroProps {
  image: string;
  text: string;
  welcome: string;
}

function Hero({ image, text, welcome }: HeroProps) {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content text-center">
          <h1 className="display-3 fw-bold">{welcome}</h1>
          <p className="lead">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
