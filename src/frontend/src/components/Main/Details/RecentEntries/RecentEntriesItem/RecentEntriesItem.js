import './RecentEntriesItem.scss'

const RecentEntriesItem = ({id, name, lastname, payable, paymentStatus, curedStatus}) => {

    return (
        <tbody>
        <tr>
            <td>{id}</td>
            <td>{name} {lastname}</td>
            <td>{`$${payable}`}</td>
            <td><span
                className={curedStatus === "CURED" ? 'status cured' : curedStatus === "TREATMENT" ? 'status progress' : ""}>{curedStatus === "CURED" ? "Вылечен" : curedStatus === "TREATMENT" ? "В процессе" : "Записан"}</span>
            </td>
            <td>{paymentStatus === "PAID" ? "Оплачено" : "Не олачено"}</td>
        </tr>
        </tbody>
    )
}
export default RecentEntriesItem;