import Hero from "./";
import imgWelcome from "../../assets/img/pastas-hero.webp";
function HeroRender() {
  return (
    <>
      <Hero
        image={imgWelcome}
        welcome="¡Te damos la bienvenida a Pastástico!"
        text="Descubre las recetas más exquisitas y consejos para verdaderos
            amantes de la pasta"
      ></Hero>
    </>
  );
}

export default HeroRender;
