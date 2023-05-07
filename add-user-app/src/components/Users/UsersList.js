import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css';
import Button from "../UI/Button";

const UserList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(x => <li key={x.id}>{x.name} ({x.age}years old) <Button onClick={()=>props.onRemoveUserHandler(x.id)}>Remove User</Button></li>)}
            </ul>
           
        </Card>
    )
};

export default UserList