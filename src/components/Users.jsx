import { useEffect, useState } from "react"




const Users  = ()=> {
   
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("")
   function handleAdduser(){
         setUsers([...users, {username: name}])
         setName("")
   } 
   const handleDelete = (e,id) => {
     const UpdatedList = users.filter((item)=> item.id !== id)
     setUsers(UpdatedList)
   }

   const callApi = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await data.json();
    setUsers(result)
   }
   
   useEffect(()=> {
    callApi()

   },[])
    return (
        <div>
            <input placeholder="Add-new-user" value={name} onChange={(e)=> setName(e.target.value)}/>
            <button onClick={handleAdduser}>Add user</button>
            
            <div>
                <h1>Users List</h1>
                <ul>
                 {
                    users.map((user, index) => {
                        console.log(user, "usernams")
                        return (
                            <li key={index}>
                                {user.username}
                                <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={(e)=> handleDelete(e,users.id)}>Delete</button>
                            </li>
                        )
                    })
                 }
                </ul>
            </div>

        </div>

    )
}

export default Users;