import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { doctorData } from "../helper/data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const [drName, setDrName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({ id, name, dep, img }) => (
          <Col xs={6} md={4} lg={3} key={id}>
            <img
              onClick={() => {
                handleShow();
                setDrName(name);
              }}
              src={img}
              className="img-thumbnail doctor-img"
              alt=""
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal handleClose={handleClose} show={show} drName={drName} 
        handleAdd={handleAdd}
      />
    </Container>
  );
};

export default Doctors;
