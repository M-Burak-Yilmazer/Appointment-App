import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddModal({ handleAdd, show, handleClose, drName }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: new Date().getTime(),
      patient: name,
      day: date,
      doctor:drName,
      consulted:false

    };
    handleAdd(newAppointment);
    handleClose();
    console.log(name, date);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="date"
                required
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </Form.Group>
            <div className="text-center">
              <Button
                className="me-2"
                variant="success"
                type="button"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button type="submit" variant="danger">
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
