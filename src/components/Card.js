import { React, useState } from "react";
import EditTask from "../modals/EditTask";

const TodoCard = ({ element, index, deleteTask, editTask }) => {
  const [modalShow, setModalShow] = useState(false);

  const [completed, setCompleted] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const handleDelete = () => {
    console.log("delete function");
    deleteTask(index);
  };

  const handleUpdate = (obj) => {
    console.log("update task function");
    editTask(obj, index);
  };

  const handleCheck = (obj) => {
    // obj.isComplete(true)
    setCompleted(!completed);
    // completeTask(obj)
  };

  const handleComplete = () => {
    // console.log('task completed')
  };

  return (
    <>
      <div className="card-wrapper mr-5  mb-4">
        <div
          className="card-top"
          style={{ backgroundColor: colors[index % 5].primaryColor }}
        ></div>
        <div className="task-holder">
          <span
            className="card-header"
            style={{ backgroundColor: colors[index % 5].secondaryColor }}
          >
            {element.name}
          </span>
          <p
            className="ms-2 text-start overflow-auto mb-2"
            style={{ height: "130px" }}
          >
            {element.des}
          </p>

          <div className="details d-flex position-relative">
            <div className="status ps-2">
              <p
                className="p-1"
                style={{
                  backgroundColor: colors[index % 5].secondaryColor,
                  fontWeight: "bold",
                }}
              >
                {completed ? "Complete" : ""}
              </p>
            </div>

            <div
              className="icons d-flex"
              style={{ position: "absolute", right: "20px", bottom: "20px" }}
            >
              <input
                className="form-check-input1 me-3"
                type="checkbox"
                checked={completed}
                onChange={handleCheck}
                onClick={handleComplete}
                id="flexCheckDefault"
              />

              <i
                className="far fa-edit me-3"
                style={{ color: colors[index % 5].primaryColor }}
                type="button"
                disabled={true}
                onClick={() => setModalShow(true)}
              ></i>

              <i
                className="fas fa-trash-alt "
                style={{ color: colors[index % 5].primaryColor }}
                onClick={handleDelete}
              ></i>
            </div>
          </div>
        </div>

        {
          <EditTask
            show={modalShow}
            handleUpdate={handleUpdate}
            onHide={() => setModalShow(false)}
            taskObj={element}
          />
        }
      </div>
    </>
  );
};

export default TodoCard;
