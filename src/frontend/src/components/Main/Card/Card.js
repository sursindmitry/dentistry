import "./Card.scss"

const Card = ({numbers, cardName, icon}) => {

    return (
        <div className="card">
            <div>
                <div className="numbers">{numbers}</div>
                <div className="cardName">{cardName}</div>
            </div>
            <div className="iconBx">
                <ion-icon name={icon}></ion-icon>
            </div>
        </div>
    )
}
export default Card;