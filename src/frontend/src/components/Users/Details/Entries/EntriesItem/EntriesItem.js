import './EntriesItem.scss'
import {deleteUser} from "../../../../../client";

const EntriesItem = ({id, name, lastname, curedStatus, payable, paymentStatus}) => {
    const removeUser = (userId) => {
        deleteUser(userId).then(() => {
            console.log("Пользователь удалён")
        }).catch(err => {
            err.response.json().then(res => {
                console.log("Ошибка: " + res.message + " " + res.status + " " + res.error
                )
            })
        })
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
                <a onClick={()=>removeUser(id)}>
                    <ion-icon name="trash-outline" size="large"></ion-icon>
                </a>
                <a>
                    <ion-icon name="create-outline" size="large"></ion-icon>
                </a>
                <a>
                    <ion-icon name="eye-outline" size="large"></ion-icon>
                </a>
            </td>
        </tr>
        </tbody>
    )
}
export default EntriesItem;