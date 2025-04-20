import pasta1 from "../../assets/img/spagghetti.webp";
import pasta2 from "../../assets/img/fettuccine.webp";
import pasta3 from "../../assets/img/penne.webp";
import pasta4 from "../../assets/img/ravioli.webp";
import pasta5 from "../../assets/img/linguine.webp";
import pasta6 from "../../assets/img/fusili.webp";
import Card from "./";
import { CardBody } from "./CardBody";
import "./Cards.css";

function Cards() {
  return (
    <div className="card-container">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <Card image={pasta1}>
              <CardBody
                title="Spaghetti"
                text="Pasta larga y delgada, perfecta para acompañar con salsas de tomate, aceite de oliva y ajo."
              />
            </Card>
          </div>
          <div className="col-md-4">
            <Card image={pasta2}>
              <CardBody
                title="Fettuccine"
                text="Tiras anchas y planas de pasta que combinan idealmente con salsas cremosas, como la Alfredo."
              />
            </Card>
          </div>
          <div className="col-md-4">
            <Card image={pasta3}>
              <CardBody
                title="Penne"
                text="Pasta corta y tubular, excelente para platos con salsas espesas y guisos."
              />
            </Card>
          </div>
          <div className="col-md-4">
            <Card image={pasta4}>
              <CardBody
                title="Ravioli"
                text="Pasta rellena, generalmente con queso o carne, ideal para una comida reconfortante."
              />
            </Card>
          </div>
          <div className="col-md-4">
            <Card image={pasta5}>
              <CardBody
                title="Linguine"
                text="Similar al spaghetti pero un poco más ancho, perfecta con mariscos o salsas a base de aceite de oliva."
              />
            </Card>
          </div>
          <div className="col-md-4">
            <Card image={pasta6}>
              <CardBody
                title="Fusili"
                text="Pasta en forma de espiral que atrapa las salsas en sus giros, excelente para ensaladas de pasta o platos al horno."
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
