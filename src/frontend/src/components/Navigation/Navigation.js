import "./Navigation.scss"
import {useState} from "react";

const Navigation = ({isToggle, setActiveComponent}) => {
    const [activeItem, setActiveItem] = useState(null);

    function handleMouseOver(event) {
        setActiveItem(event.currentTarget.getAttribute('data-title'));
    }

    return (
        <div className={isToggle === false ? 'navigation active' : 'navigation'}>
            <ul>
                <li
                    data-title="Brand-Name"
                    className={activeItem === 'Brand Name' ? 'hovered' : ''}
                    onMouseOver={handleMouseOver}
                >
                    <a href="#">
                        <span className="icon"><ion-icon name="logo-apple"></ion-icon></span>
                        <span className="title">Стоматология</span>
                    </a>
                </li>
                <li
                    data-title="Dashboard"
                    className={activeItem === 'Dashboard' ? 'hovered' : ''}
                    onMouseOver={handleMouseOver}
                >
                    <a onClick={()=>setActiveComponent('main')}>
                        <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span className="title">Главная</span>
                    </a>
                </li>
                <li
                    data-title="Customers"
                    className={activeItem === 'Customers' ? 'hovered' : ''}
                    onMouseOver={handleMouseOver}
                >
                    <a onClick={()=>setActiveComponent('users')}>
                        <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span className="title">Пациенты</span>
                    </a>
                </li>
                <li
                    data-title="Message"
                    className={activeItem === 'Message' ? 'hovered' : ''}
                    onMouseOver={handleMouseOver}
                >
                    <a href="#">
                        <span className="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                        <span className="title">Обращения</span>
                    </a>
                </li>
                <li
                    data-title="Help"
                    className={activeItem === 'Help' ? 'hovered' : ''}
                    onMouseOver={handleMouseOver}
                >
                    <a href="#">
                        <span className="icon"><ion-icon name="help-outline"></ion-icon></span>
                        <span className="title">Помощь</span>
                    </a>
                </li>
                <li
                    data-title="Settings"
                    className={activeItem === 'Settings' ? 'hovered' : ''}
                    onMouseOver={handleMouseOver}
                >
                    <a href="#">
                        <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span className="title">Настройки</span>
                    </a>
                </li>
                <li
                    data-title="Password"
                    className={activeItem === 'Password' ? 'hovered' : ''}
                    onMouseOver={handleMouseOver}
                >
                    <a href="#">
                        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                        <span className="title">Пароль</span>
                    </a>
                </li>
                <li
                    data-title="Sign Out"
                    className={activeItem === 'Sign Out' ? 'hovered' : ''}
                    onMouseOver={handleMouseOver}
                >
                    <a href="#">
                        <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                        <span className="title">Выйти</span>
                    </a>
                </li>
            </ul>
        </div>
    )

}
export default Navigation;