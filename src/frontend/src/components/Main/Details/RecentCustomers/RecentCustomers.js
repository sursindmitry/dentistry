import './RecentCustomers.scss'
import RecentCustomersItem from "./RecentCustomersItem/RecentCustomersItem";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../../../client";

const RecentCustomers = ()=>{
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
        <div className="recentCustomers">
            <div className="cardHeader">
                <h2>Последние пациенты</h2>
            </div>
            {users.slice(0,10).map((user) => (
                <RecentCustomersItem
                    key={user.id}
                    name={user.name}
                    lastname={user.lastname}
                    paymentStatus={user.paymentStatus}
                />
            ))}
        </div>
    )
}
export default RecentCustomers