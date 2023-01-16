import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { React, useState } from "react";

const CreateTask = ({ show, onHide, saveTask }) => {
  const [taskName, setTaskName] = useState("");
  const [desc, setDesc] = useState("");
  // const [complete, setComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "task") {
      setTaskName(value);
    }
    if (name === "desc") {
      setDesc(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    console.log("save button");

    let taskObj = {};
    taskObj["name"] = taskName;
    taskObj["des"] = desc;
    // taskObj["isComplete"] = complete;
    saveTask(taskObj);

    // localStorage.setItem('savedTask', JSON.stringify(taskObj));

    console.log(taskObj);
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Task
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
        <Button onClick={handleSave}>Add Task</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTask;
