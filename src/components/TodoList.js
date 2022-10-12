import { Button } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import CreateTask from "../modals/CreateTask";
import TodoCard from "./Card";

const TodoList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [completeTaskList, setCompleteTaskList] = useState([]);

  const saveTask = (object) => {

    let tempList = taskList;

    tempList.push(object);
    localStorage.setItem("savedTask", JSON.stringify(tempList));

    setTaskList(tempList);

    setModalShow(false);
  };

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    setTaskList(tempList);
    localStorage.setItem("savedTask", JSON.stringify(tempList));
    window.location.reload();
  };

  const editTask = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("savedTask", JSON.stringify(tempList));

    setTaskList(tempList);
    window.location.reload();
  };

  const completeTask = (object) => {
    const tempList = completeTaskList;

    tempList.push(object);
    localStorage.setItem("completedTask", JSON.stringify(tempList));

    setCompleteTaskList(tempList);
    // window.location.reload()
  };

  useEffect(() => {
    let arr = localStorage.getItem("savedTask");

    if (arr) {
      let item = JSON.parse(arr);
      setTaskList(item);
    }
  }, []);

  return (
    <>
      <div className="header">
        <h1>Todo List</h1>
        <Button
          className="mt-2"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Create Task
        </Button>
      </div>

      <div className="content">
        <div className="heading pt-3">
          <h1>All Tasks</h1>
        </div>

        <div className="task-container d-flex mt-5 flex-wrap mx-3 justify-content-evenly">
          {/* <TodoCard /> */}

          {taskList &&
            taskList.map((ele, index) => (
              <div key={index}>
                <TodoCard
                  element={ele}
                  index={index}
                  deleteTask={deleteTask}
                  editTask={editTask}
                  completeTask={completeTask}
                />
              </div>
            ))}
        </div>
      </div>

      <CreateTask
        show={modalShow}
        saveTask={saveTask}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TodoList;
