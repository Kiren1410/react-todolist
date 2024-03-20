import { useState } from "react";



export default function AddForm(props) {
  const { todos, setTodos} = props;
  const [value, setValue] = useState("");
    return (
      <div class="mt-4">
      <form onSubmit={(event) => {
        event.preventDefault();
        setTodos([
          ...todos,
          {
            id: Math.random(),
            name: value,
          }
        ]);
        setValue("");
      }}
      class="d-flex justify-content-between align-items-center">
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          type="text"
          class="form-control"
          placeholder="Add new item..."
          required
        />
        <button class="btn btn-primary btn-sm rounded ms-2">Add</button>
      </form>
    </div>
    );
}