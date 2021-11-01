import { useEffect, useState } from "react";
import AddTask from "./addTask";
import "bootstrap/dist/css/bootstrap.min.css";

function ViewTasks() {
  let [tasks, setTasks] = useState([]);

  const toggleDone = (i) =>
    setTasks(
      tasks.map((task, j) => {
        if (j === i) {
          return {
            ...tasks,
            taskText: task.taskText,
            done: !task.done,
          };
        }
        return task;
      })
    );

  const removeTask = (i) => {
    setTasks(tasks.filter((task, j) => i !== j));
  };

  return (
    <div className="container my-5 p-5">
      <div className="row">
        <div className="col-12">
          <AddTask
            onSubmit={(taskText) =>
              setTasks([{ taskText, done: false }, ...tasks])
            }
          />
          {console.log(tasks)}
          <table className="text-center table table-warning">
            {tasks.map((task, i) => {
              console.log(task.taskText, task.done);
              return (
                <tr key={task.taskText}>
                  <td
                    className="col-4"
                    style={{
                      textDecoration: task.done ? "line-through" : "none",
                    }}
                  >
                    {task.taskText}
                  </td>
                  <td className="col-4">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeTask(i)}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="col-4">
                    <button
                      className="btn btn-success"
                      onClick={() => toggleDone(i)}
                    >
                      complete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewTasks;
