import "./index.scss"
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import {useState} from "react";
import Users from "./components/Users/Users";
import Settings from "./components/Settings/Settings";

function App() {
    const [isToggle, setIsToggle] = useState(true);
    const [activeComponent, setActiveComponent] = useState('main')
    const [isDropDownMenu, setIsDropDownMenu] = useState(true)

    function handleMouseClickToggle() {
        setIsToggle(!isToggle);
    }
    function handleMouseClickDropDown() {
        setIsDropDownMenu(!isDropDownMenu);
    }

    let ComponentToRender;
    if (activeComponent === 'main') {
        ComponentToRender = <Main
            isToggle={isToggle}
            handleMouseClickToggle={handleMouseClickToggle}
            handleMouseClickDropDown={handleMouseClickDropDown}
            isDropDownMenu={isDropDownMenu}
            setActiveComponent={setActiveComponent}
        />;
    } else if (activeComponent === 'users') {
        ComponentToRender = <Users
            isToggle={isToggle}
            handleMouseClickToggle={handleMouseClickToggle}
            handleMouseClickDropDown={handleMouseClickDropDown}
            isDropDownMenu={isDropDownMenu}
        />;
    }
    else if (activeComponent === 'settings') {
        ComponentToRender = <Settings
            isToggle={isToggle}
            handleMouseClickToggle={handleMouseClickToggle}
            handleMouseClickDropDown={handleMouseClickDropDown}
            isDropDownMenu={isDropDownMenu}
        />;
    }

    return (
        <div className="App">
            <div className="container">
                <Navigation isToggle={isToggle} setActiveComponent={setActiveComponent}/>
                {ComponentToRender}
            </div>
        </div>
    );
}

export default App;
