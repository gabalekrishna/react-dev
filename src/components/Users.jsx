import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editName, setEditName] = useState("")
  const [editId, setEditId] = useState(null);
 
  function handleAdduser() {
    setUsers([...users, { username: name }]);
    setName("");
  }
  const handleDelete = (e, id) => {
    const UpdatedList = users.filter((item) => item.id !== id);
    setUsers(UpdatedList);
  };

  const handleEdit = (id,username) => {
    setEditId(id)
    setEditName(username);
  }

  const handleUpdate = () => {
    const updatedUsers = users.map((item,index)=> {
      if(item.id === editId){
        return {...item, username: editName}
      } else{
        return item;
      }
    })
    setUsers(updatedUsers)
    setEditId(null)
  }

  const callApi = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await data.json();
    setUsers(result);
  };

  useEffect(() => {
    callApi();
  }, []);
  return (
    <div>
      <input
        placeholder="Add-new-user"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdduser}>Add user</button>
      <div>
        <h1>Users List</h1>
        <ul>
          {users.map((user, index) => {
            return (
              <li key={index}>
                {
                  user.id === editId ? <><input value={editName} onChange={(e)=>setEditName(e.target.value)}/><button onClick={handleUpdate}>Update</button></> : <></>
                }
                {user.username}
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={(e) => handleDelete(e, user.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleEdit(user.id,user.username)}
                >
                  Edit
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Users;
