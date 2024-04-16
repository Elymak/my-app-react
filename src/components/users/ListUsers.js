import { useState, useEffect } from "react";
import User from "./User";
import "./ListUsers.css";
//import api from "./../../api/api";

export default function ListUsers() {

    //state
    const [users, setUsers] = useState([
        {"id":1,"name":"Daniel","surname":"Marcus","username":"user12","email":"user@gmail.com","password":"password123"}
    ]);
    const [isMounted, setIsMounted] = useState(false);
    const [error, setError] = useState(null);

    /*
    useEffect(() => {
        !isMounted &&
          api.getUsers().then((json) => {
            setUsers(json);
            setIsMounted(true);
          });
      }, [isMounted]);
    */
    useEffect(() => {
        !isMounted && fetch("http://localhost:8080/api/users")
        .then((res) => {
            return res.json();
        })
        .then(data => {
            setUsers(data);
            setIsMounted(true);
        })
        .catch(rejected => {
            console.log("failed", rejected);
        });
    }, [isMounted]);

    //comportements
    const fetchUsers = () => {
    };

    //affichage
    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <ul>
                {users.map((user) => (
                    <User
                        key={user.id}
                        userInfos={user}
                    />
                ))}
            </ul>
        </div>
    );
}