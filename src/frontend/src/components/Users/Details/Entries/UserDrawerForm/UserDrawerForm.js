import './UserDrawerForm.scss'
import {useState} from "react";
import {addNewUser} from "../../../../../client";
import {NotificationManager} from "react-notifications";

const UserDrawerForm = ({showDrawer, setShowDrawer, fetchUsers}) => {
    const onClose = () => setShowDrawer(false);
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        payable: 0,
        curedStatus: '',
        paymentStatus: ''
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewUser(user)
            .then(response => {
                onClose();
                if (user.curedStatus || user.paymentStatus ===' '){
                    NotificationManager.info("Пользователь добавлен")
                    fetchUsers();
                    return null;
                }
                NotificationManager.error("Ошибка", "Некоторые пункты не заполнены")
                fetchUsers();
            })
            .catch(err => {
                    NotificationManager.error("Ошибка", err)
            })
    };

    if (!showDrawer) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Имя:
                <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
            </label>
            <br/>
            <label>
                Фамилия:
                <input type="text" name="lastname" value={user.lastname} onChange={handleInputChange}/>
            </label>
            <br/>
            <label>
                Оплата:
                <input type="number" name="payable" value={user.payable} onChange={handleInputChange}/>
            </label>
            <br/>
            <label>
                Статус:
                <select name="curedStatus" value={user.curedStatus} onChange={handleInputChange}>
                    <option value=" ">Выберите</option>
                    <option value="CURED">Вылечен</option>
                    <option value="UNCURED">Не вылечен</option>
                    <option value="TREATMENT">Записан</option>
                </select>
            </label>
            <br/>
            <label>
                Статус оплаты:
                <select name="paymentStatus" value={user.paymentStatus} onChange={handleInputChange}>
                    <option value=" ">Выберите</option>
                    <option value="PAID">Оплачено</option>
                    <option value="UNPAID">Не оплачено</option>
                </select>
            </label>
            <br/>
            <button type="submit">Записать</button>
        </form>
    );
}
export default UserDrawerForm;