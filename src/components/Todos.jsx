import { useState } from "react"



const Todos = () => {
    const todosList = [{todo: "milk"},{todo: "sugar"}, {todo: "butter"} ]
    const [todos, setTodos] = useState(todosList)
    const [name, setName] = useState("")
    const handleAddTodo = () => {
    setTodos([...todos, { todo: name}])
    setName("")
    }
   const handleDelete = (e,deleteuser) => {
    console.log(deleteuser)
    const updatedTodos =  todos.forEach((item) => item.todo !== deleteuser)
    setTodos(updatedTodos)
   }
   
    return (
        <div className="d-flex align-items-baseline">
            <h1>Todo List</h1>
            <div style={{margin:"20px"}}>
                <input placeholder="add-todos" value={name} onChange={(e)=> setName(e.target.value)}/>
                <button className="btn btn-primary" onClick={handleAddTodo}>Add Todo</button>
              {
               todos.map((item , index)=>{
                return (
                    <h4>
                        {item.todo}
                        <span className="btn btn-primary" onClick={(e)=> handleDelete(e,item.todo)}> 🗑️ </span>
                    </h4>
                )
               })
              }
            </div>
        </div>

    )
}

export default Todos;