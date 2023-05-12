import './Users.scss'
import TopBar from "../Topbar/TopBar";

const Users = ({isToggle, handleMouseClickDropDown, handleMouseClickToggle, isDropDownMenu}) => {
    return(
        <div className={isToggle === false ? 'users active':'users'}>
            <TopBar
                handleMouseClickToggle={handleMouseClickToggle}
                handleMouseClickDropDown={handleMouseClickDropDown}
                isDropDownMenu={isDropDownMenu}
            />
            <h1>Hello</h1>
        </div>
    )
}
export default Users;