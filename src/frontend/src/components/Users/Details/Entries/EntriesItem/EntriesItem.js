import './EntriesItem.scss'

const EntriesItem = ({id, name, lastname, curedStatus, payable, paymentStatus}) => {
    return(
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
                <a>Удалить</a>
                <a>Редактировать</a>
                <a>Просмотреть</a>
            </td>
        </tr>
        </tbody>
    )
}
export default EntriesItem;