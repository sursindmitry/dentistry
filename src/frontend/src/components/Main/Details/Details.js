import "./Details.scss"
import RecentEntries from "./RecentEntries/RecentEntries";
import RecentCustomers from "./RecentCustomers/RecentCustomers";

const Details = ({setActiveComponent}) =>{
    return(
        <div className="details">
            <RecentEntries setActiveComponent={setActiveComponent}/>
            <RecentCustomers/>
        </div>
    )
}
export default Details;