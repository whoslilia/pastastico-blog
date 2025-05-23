import Advice from "./";
import notFound from "../../assets/img/notfound.png";

function ErrorRender() {
  return <Advice text="Not found" title="Error 404" image={notFound} />;
}

export default ErrorRender;
