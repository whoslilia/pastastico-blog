import NavbarRender from "../src/components/Navbar/NavbarRender";
import ErrorIcon from "../src/assets/icons/notfound.png";
function NotFound() {
  return (
    <>
      <NavbarRender />
      <div style={{ textAlign: "center", padding: "0px" }}>
        <img
          src={ErrorIcon}
          alt="404error"
          style={{ maxWidth: "20%", height: "auto" }}
        />
        <h2 style={{ marginTop: "0" }}>¡No encontrado!</h2>
      </div>
    </>
  );
}

export default NotFound;
