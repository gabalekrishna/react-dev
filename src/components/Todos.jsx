import { useEffect, useState } from "react"



const Todos = () => {
    const [todos, setTodos] = useState([])
    const [name, setName] = useState("")
    const handleAddTodo = () => {
    setTodos([...todos, { title: name}])
    setName("")
    }
   const handleDelete = (e,deleteuser) => {
    console.log(deleteuser)
    const updatedTodos =  todos.filter((item) => item.title !== deleteuser)
    setTodos(updatedTodos)
   }
  const callApi = async() => {
    const data =await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await data.json();
    setTodos(result)
  }
  useEffect(()=> {
    callApi();
  },[])
   
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
                        {item.title}
                        <span className="btn btn-primary" onClick={(e)=> handleDelete(e,item.title)}> 🗑️ </span>
                    </h4>
                )
               })
              }
            </div>
        </div>

    )
}

export default Todos;