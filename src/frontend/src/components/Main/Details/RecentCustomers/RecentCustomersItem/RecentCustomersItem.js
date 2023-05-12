import "./RecentCustomersItem.scss"

const RecentCustomersItem = ({name, lastname, paymentStatus}) => {
    return (
        <table>
            <tr className="lastCustomers">
                <td width={60}>
                    <div className="imgBx"><img src="/img/img1.png" alt="User"/></div>
                </td>
                <td><h4>{name} {lastname}</h4></td>
                <td><h4>{paymentStatus === "PAID" ? "Оплачено" : "Не олачено"}</h4></td>
            </tr>
        </table>
    )
}
export default RecentCustomersItem;