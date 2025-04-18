import pasta1 from "../../assets/img/pasta1.jpg";
import pasta2 from "../../assets/img/pasta2.jpg";
import pasta3 from "../../assets/img/pasta3.jpg";
import Card from "./";
import { CardBody } from "./CardBody";
import "./Cards.css";

function Cards() {
  return (
    <div className="card-container d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <Card image={pasta1}>
              <CardBody
                title="My title"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore quos similique, quod consequuntur dolore adipisci nemo doloremque quam nulla, suscipit aperiam repellendus obcaecati voluptate nesciunt corrupti itaque a ullam!"
              />
            </Card>
          </div>
          <div className="col-md-4">
            <Card image={pasta2}>
              <CardBody
                title="My title"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore quos similique, quod consequuntur dolore adipisci nemo doloremque quam nulla, suscipit aperiam repellendus obcaecati voluptate nesciunt corrupti itaque a ullam!"
              />
            </Card>
          </div>
          <div className="col-md-4">
            <Card image={pasta3}>
              <CardBody
                title="My title"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores labore quos similique, quod consequuntur dolore adipisci nemo doloremque quam nulla, suscipit aperiam repellendus obcaecati voluptate nesciunt corrupti itaque a ullam!"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
