import TodoItem from "./todo_item";
import AddForm from "./add_new_form"


export default function TodoList() {
  
    const todos = [
        {
          id: 1,
          text: "Task 1",
          isCompleted: true
        },
        {
          id: 2,
          text: "Task 2",
          isCompleted: false
        },
        {
          id: 3,
          text: "Task 3",
          isCompleted: false
        }
      ];

      return (
        <div
        className="card rounded shadow-sm mx-auto my-4"
        style={{ maxWidth: "500px" , margin: "60px auto"}}
      >
          <div className="card-body">
                
                  {todos.map((todos) =>  {
                      return <TodoItem name={todos.text} />
                  })}
                  <AddForm />
              </div>
          </div>
      );

      
}