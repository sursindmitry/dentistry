import "./DropDownMenu.scss"

const DropDownMenu =({isDropDownMenu})=>{
    return(
        <div className={isDropDownMenu === false ? 'dropdown-menu' : 'dropdown-menu active'}>
            <h3>Дмитрий Сурсин<br/><span>Администратор</span></h3>
            <ul>
                <DropDownItem img="person-circle-outline" text="Мой профиль"/>
                <DropDownItem img="settings-outline" text="Настройки"/>
                <DropDownItem img="exit-outline" text="Выйти"/>
            </ul>
        </div>
    )
}
export default DropDownMenu;

const DropDownItem = (props) => {
    return (
        <li className="dropdownItem">
            <ion-icon name={props.img}></ion-icon>
            <a>{props.text}</a>
        </li>
    )
}