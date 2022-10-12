import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { React, useState, useEffect } from "react";

const EditTask = ({ show, onHide, handleUpdate, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "task") {
      setTaskName(value);
    }
    if (name === "desc") {
      setDesc(value);
    }
  };

  const handleUpdateFunc = (e) => {
    e.preventDefault();

    console.log("edit button");

    let tempObj = {};
    tempObj.name = taskName;
    tempObj.des = desc;

    handleUpdate(tempObj);
  };

  useEffect(() => {
    setTaskName(taskObj.name);
    setDesc(taskObj.des);
  }, [taskObj.name, taskObj.des]);

  return (
    <Modal
      //   show={show}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Task </Form.Label>
            <Form.Control
              name="task"
              type="text"
              value={taskName}
              placeholder="Enter task"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Description </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="desc"
              value={desc}
              palceholder="Add Description..."
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleUpdateFunc}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTask;
