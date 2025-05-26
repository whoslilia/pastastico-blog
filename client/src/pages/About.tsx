import Hero from "../components/Hero";
import aboutImage from "../assets/img/pasta-about.avif";
import NavbarRender from "../components/Navbar/NavbarRender";

function About() {
  return (
    <>
      <NavbarRender />
      <Hero
        image={aboutImage}
        welcome="Conoce a Pastástico"
        text="Una comunidad creada por amantes de la buena pasta, para los paladares más exigentes."
      />
    </>
  );
}

export default About;
