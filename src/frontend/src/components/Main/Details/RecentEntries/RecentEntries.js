import './RecentEntries.scss'
import {useEffect, useState} from "react";
import {getAllUsers} from "../../../../client";
import RecentEntriesItem from "./RecentEntriesItem/RecentEntriesItem";

const RecentEntries = () => {
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

    return (
        <div className="recentEntries">
            <div className="cardHeader">
                <h2>Последние записи</h2>
                <a href="#" className="btn">Посмотреть все</a>
            </div>
            <table>
                <thead>
                <tr>
                    <td>Фамилия Имя</td>
                    <td>К оплате</td>
                    <td>Статус</td>
                </tr>
                </thead>
                {users.slice(0,10).map((user) => (
                    <RecentEntriesItem
                        key={user.id}
                        name={user.name}
                        lastname={user.lastname}
                        payable={user.payable}
                        curedStatus={user.curedStatus}
                    />
                ))}
            </table>
        </div>
    )
}
export default RecentEntries;