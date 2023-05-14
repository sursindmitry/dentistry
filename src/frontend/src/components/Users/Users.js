import './Users.scss'
import TopBar from "../Topbar/TopBar";
import Details from "./Details/Details";

const Users = ({isToggle, handleMouseClickDropDown, handleMouseClickToggle, isDropDownMenu}) => {

    return (
        <div className={isToggle === false ? 'users active' : 'users'}>
            <TopBar
                handleMouseClickToggle={handleMouseClickToggle}
                handleMouseClickDropDown={handleMouseClickDropDown}
                isDropDownMenu={isDropDownMenu}
            />
            <Details/>
        </div>
    )
}
export default Users;