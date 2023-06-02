import './Settings.scss'
import TopBar from "../Topbar/TopBar";

const Settings = ({isToggle, handleMouseClickDropDown, handleMouseClickToggle, isDropDownMenu}) => {
    return (
        <div className={isToggle === false ? 'settings active' : 'settings'}>
            <TopBar
                handleMouseClickToggle={handleMouseClickToggle}
                handleMouseClickDropDown={handleMouseClickDropDown}
                isDropDownMenu={isDropDownMenu}
            />

            Settings

        </div>
    )
}
export default Settings;