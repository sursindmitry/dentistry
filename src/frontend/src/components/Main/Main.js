import "./Main.scss"
import Card from "./Card/Card";
import Details from "./Details/Details";
import TopBar from "../Topbar/TopBar";
import {getAllUsers} from "../../client";
import {useEffect, useState} from "react";

const Main = ({isToggle, handleMouseClickToggle, handleMouseClickDropDown, isDropDownMenu}) => {
    const [users, setUsers] = useState([]);
    const [curedUsers, setCuredUsers] = useState(0);
    const [curedTreatment, setCuredTreatment] = useState(0);
    const [payable, setPayable] = useState(0);

    const fetchUsers = () => {
        getAllUsers()
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                let cured = 0
                let treatment = 0
                let payable = 0
                data.map((user) => {
                    if (user.curedStatus === "CURED") {
                        setCuredUsers(++cured)
                    }
                    if (user.curedStatus === "TREATMENT") {
                        setCuredTreatment(++treatment)
                    }
                    if (user.payable !== 0 && user.curedStatus === "CURED" && user.paymentStatus==="PAID") {
                        payable=payable+user.payable
                        setPayable(payable)
                    }
                })
            }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className={isToggle === false ? 'main active' : 'main'}>
            <TopBar
                handleMouseClickToggle={handleMouseClickToggle}
                handleMouseClickDropDown={handleMouseClickDropDown}
                isDropDownMenu={isDropDownMenu}
            />
            <div className="cardBox">
                <Card numbers={curedTreatment} cardName="Пациентов" icon="eye-outline"/>
                <Card numbers={curedUsers} cardName="Лечений" icon="cart-outline"/>
                <Card numbers={users.length} cardName="Заявок" icon="chatbubbles-outline"/>
                <Card numbers={`$${payable}`} cardName="Выручка" icon="cash-outline"/>
            </div>
            <Details/>
        </div>
    )
}
export default Main;

