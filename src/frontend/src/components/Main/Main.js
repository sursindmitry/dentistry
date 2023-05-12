import "./Main.scss"
import Card from "./Card/Card";
import Details from "./Details/Details";
import TopBar from "../Topbar/TopBar";

const Main = ({isToggle, handleMouseClickToggle, handleMouseClickDropDown, isDropDownMenu}) => {

    return (
        <div className={isToggle === false ? 'main active' : 'main'}>
            <TopBar
                handleMouseClickToggle={handleMouseClickToggle}
                handleMouseClickDropDown={handleMouseClickDropDown}
                isDropDownMenu={isDropDownMenu}
            />
            <div className="cardBox">
                <Card numbers="1,504" cardName="Просмотров" icon="eye-outline"/>
                <Card numbers="80" cardName="Лечений" icon="cart-outline"/>
                <Card numbers="284" cardName="Заявок" icon="chatbubbles-outline"/>
                <Card numbers="$7,842" cardName="Выручка" icon="cash-outline"/>
            </div>
            <Details/>
        </div>
    )
}
export default Main;

