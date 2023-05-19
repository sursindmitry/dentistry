import './UserDrawerForm.scss'
import {useEffect, useState} from "react";
import {addNewUser, editUser} from "../../../../../client";
import {NotificationManager} from "react-notifications";

const UserDrawerForm = ({showDrawer, setShowDrawer, fetchUsers, userData, userId, setUserId}) => {
    const onClose = () => setShowDrawer(false);
    useEffect(() => {
        if (userData) {
            setUser(userData);
        }
    }, [userData]);
    const [user, setUser] = useState({
        name: ' ',
        lastname: ' ',
        payable: 0,
        curedStatus: ' ',
        paymentStatus: ' '
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const addUser = (user) => {
        addNewUser(user)
            .then(response => {
                onClose();
                if (user.curedStatus || user.paymentStatus === ' ') {
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
    }

    const changeUser = (userId, user) => {
        editUser(userId, user).then(() => {
            fetchUsers();
            setShowDrawer(false)
            NotificationManager.info("Пользователь отредактирован")
        }).catch(err => {
            err.response.json().then(res => {
                NotificationManager.error("Ошибка", `[${res.message}] [${res.status}] [${res.error}]`)
            })
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (userId===0) {
            addUser(user);
        } else {
            changeUser(userId, user);
            setUserId(0);
        }
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
                    <option value="TREATMENT">В процессе</option>
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