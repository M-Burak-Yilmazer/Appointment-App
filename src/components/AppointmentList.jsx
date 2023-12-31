import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ appointment }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>

      {appointment.map(({ id, patient, day, consulted, doctor }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
        >
          <Row className="justify-content-between align-items-center">
            <Col xs={6}>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>Date: {new Date(day).toLocaleDateString("tr")}</h5>
              <h6>Time: {new Date(day).toLocaleTimeString("tr")}</h6>
            </Col>
            <Col>
              <TiDelete className="text-danger fs-1 text-end" type="button" />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
