import { useState } from "react"



const UserList = () => {
    
  let userObj = [{
    name:"krishna",
    age: "29"
  }, {
    name:"sai",
    age: "30"
  }, {
    name:"siva",
    age: "31"
  }, {
    name:"karthik",
    age: "32"
  }]
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [userList, setUserList] = useState(userObj)


  const handleAddUser = () => [
     setUserList(()=> {
        return [...userList, {name: name, age: age}]
     }),
     setName(""),
     setAge(0)
  ]

  console.log(userObj, "userObj")
  console.log(userList, "userList")
  console.log("render")
    return (
       <>
       <h1> User List</h1>
       <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="number" value={age} onChange={(e)=> setAge(e.target.value)}/> 
        <button onClick={handleAddUser}>Add user</button>
       {
        userList.map((item , index)=> {
            return(
                <div>
                    <h4>{item.name} :{item.age}</h4>
                </div>
            )
        })
       }
       </>

    )
}


export default UserList