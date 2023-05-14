import './RecentEntriesItem.scss'

const RecentEntriesItem = ({name, lastname, payable, curedStatus}) => {

    return (
        <tbody>
        <tr>
            <td>{name} {lastname}</td>
            <td>{`$${payable}`}</td>
            <td><span
                className={curedStatus === "CURED" ? 'status cured' : curedStatus === "TREATMENT" ? 'status progress' : ""}>{curedStatus === "CURED" ? "Вылечен" : curedStatus === "TREATMENT" ? "В процессе" : "Записан"}</span>
            </td>
        </tr>
        </tbody>
    )
}
export default RecentEntriesItem;