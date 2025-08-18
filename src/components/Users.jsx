import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(null);
  const [editName, setEditName] = useState("");
  function handleAdduser() {
    setUsers([...users, { username: name }]);
    setName("");
  }
  const handleDelete = (e, id) => {
    const UpdatedList = users.filter((item) => item.id !== id);
    setUsers(UpdatedList);
  };

  const handleEdit = (id, username) => {
    setEdit(id);
    setEditName(username);
  };
  const handleEditSave = (id) => {
    const updatedName = users.map((item, index)=> 
        {
        if(item.id === id){
            return {...users, username: editName}
        } else{
            return item;
        }
    },
    )
    setUsers(updatedName)
  }

  const callApi = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await data.json();
    setUsers(result);
  };

  useEffect(() => {
    callApi();
  }, []);

  console.log(edit, "editedId");
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
        <h4>{edit}</h4>
        <ul>
          {users.map((user, index) => {
            return (
              <li key={index}>
                <div>
                  {edit === user.id ? (
                    <>
                      <input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />{" "}
                      <button onClick={() =>handleEditSave(user.id)}>Save Edit name</button>
                    </>
                  ) : (
                    ""
                  )}
                </div>

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
                  onClick={() => handleEdit(user.id, user.username)}
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
