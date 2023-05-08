import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevState) => {
      return [...prevState, { name: userName, age: userAge, id: Math.random().toString() }]
    });
  }
  const deleteUserHandler = (id) => {
    const newUserList= usersList.filter(x => x.id !== id)
    setUsersList(newUserList)
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} onRemoveUserHandler={deleteUserHandler} />
    </>
  );
}

export default App;
