import './EntriesItem.scss'
import {deleteUser} from "../../../../../client";
import {NotificationManager} from "react-notifications";

const EntriesItem = ({
                         id,
                         name,
                         lastname,
                         curedStatus,
                         payable,
                         paymentStatus,
                         setIsDeleteUser,
                         setShowDrawer,
                         setUserData,
                         setUserId
                     }) => {

    const userData = {
        name: name,
        lastname: lastname,
        payable: payable,
        curedStatus: curedStatus,
        paymentStatus: paymentStatus
    };
    const removeUser = (userId) => {
        deleteUser(userId).then(() => {
            setIsDeleteUser(true)
            NotificationManager.info("Пользователь удалён")
        }).catch(err => {
            err.response.json().then(res => {
                setIsDeleteUser(true)
                NotificationManager.error("Ошибка", `[${res.message}] [${res.status}] [${res.error}]`)
            })
        })
    }

    const changeUser = (userId, userData) => {
        setUserId(userId);
        setUserData(userData);
        setShowDrawer(true)
    }

    return (
        <tbody>
        <tr>
            <td>{id}</td>
            <td>{name} {lastname}</td>
            <td>{`$${payable}`}</td>
            <td><span
                className={curedStatus === "CURED" ? 'status cured' : curedStatus === "TREATMENT" ? 'status progress' : ""}>{curedStatus === "CURED" ? "Вылечен" : curedStatus === "TREATMENT" ? "В процессе" : "Записан"}</span>
            </td>
            <td><h4>{paymentStatus === "PAID" ? "Оплачено" : "Не олачено"}</h4></td>
            <td>
                <a onClick={() => removeUser(id)}>
                    <ion-icon name="trash-outline" size="large"></ion-icon>
                </a>
                <a onClick={() => changeUser(id, userData)}>
                    <ion-icon name="create-outline" size="large"></ion-icon>
                </a>
            </td>
        </tr>
        </tbody>
    )
}
export default EntriesItem;