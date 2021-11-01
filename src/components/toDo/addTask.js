import { useState } from "react";
import ViewTasks from "./viewTask";

const useInputValue = (initialvalue) => {
  const [value, setValue] = useState(initialvalue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
};

function AddTask({ onSubmit }) {
  const { resetValue, ...text } = useInputValue("");

  return (
    <>
      <div
        style={{ direction: "rtl" }}
        className="container my-5 p-5 bg-primary text-light mt-5"
      >
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4" style={{ direction: "rtl" }}>
              !To-DO APP
            </h1>
            <h5 style={{ direction: "rtl" }}>Add New To-Do</h5>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(text.value);
                resetValue();
              }}
            >
              <input
                style={{ direction: "ltr" }}
                name="task"
                {...text}
                type="text"
                className="form-control mt-5"
                id="task"
                aria-describedby="task"
                placeholder="Enter new Task"
              />
              <button
                type="submit"
                class="btn btn-primary border border-1 border-light mt-5"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTask;
