import "./Entries.scss"
import EntriesItem from "./EntriesItem/EntriesItem";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../../../client";
import {NotificationContainer} from "react-notifications";
import UserDrawerForm from "./UserDrawerForm/UserDrawerForm";

const Entries = () => {
    const [users, setUsers] = useState([]);
    const [isDeleteUser, setIsDeleteUser] = useState(false)
    const [showDrawer, setShowDrawer] = useState(false)

    const [userData, setUserData] = useState([]);
    const [userId, setUserId] = useState(0);

    const fetchUsers = () => {
        getAllUsers()
            .then(res => res.json())
            .then(data => {
                setIsDeleteUser(false)
                setUsers(data)
            }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchUsers();
    }, [isDeleteUser, userData])

    return (
        <div className="entries">
            <UserDrawerForm
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
                fetchUsers={fetchUsers}
                userData={userData}
                userId={userId}
                setUserId={setUserId}
            />
            <NotificationContainer/>
            <div className="cardHeader">
                <h2>Последние записи</h2>
                <a onClick={() => setShowDrawer(!showDrawer)} className="btn">Добавить пациента</a>
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
                                 setIsDeleteUser={setIsDeleteUser}
                                 setShowDrawer={setShowDrawer}
                                 setUserData={setUserData}
                                 setUserId={setUserId}
                    />
                ))}
            </table>
        </div>
    )
}
export default Entries;