import "./Entries.scss"
import EntriesItem from "./EntriesItem/EntriesItem";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../../../client";

const Entries =()=>{
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        getAllUsers()
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchUsers();
    }, [])


    return(
        <div className="entries">
            <div className="cardHeader">
                <h2>Последние записи</h2>
                <a href="#" className="btn">Добавить пользователя</a>
            </div>
            <table>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Фамилия Имя</td>
                    <td>К оплате</td>
                    <td>Статус</td>
                    <td>Статус оплаты</td>
                    <td>Действия</td>
                </tr>
                </thead>

                {users.map((user) => (
                    <EntriesItem key={user.id}
                                 id={user.id}
                                 name={user.name}
                                 lastname={user.lastname}
                                 payable={user.payable}
                                 curedStatus={user.curedStatus}
                                 paymentStatus={user.paymentStatus}
                    />
                ))}
            </table>
        </div>
    )
}
export default Entries;