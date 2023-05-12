import './TopBar.scss'
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const TopBar = ({handleMouseClickToggle, handleMouseClickDropDown, isDropDownMenu}) => {
    return (
        <div className="topbar">
            <div className="toggle" onClick={handleMouseClickToggle}>
                <ion-icon name="menu-outline"></ion-icon>
            </div>
            <div className="search">
                <label>
                    <input type="text" placeholder="Найти"/>
                    <ion-icon name="search-outline"></ion-icon>
                </label>
            </div>
            <div className="user" onClick={handleMouseClickDropDown}>
                <img src="/user.png" alt="User"/>
            </div>
            <DropDownMenu isDropDownMenu={isDropDownMenu}/>
        </div>
    )
}
export default TopBar;