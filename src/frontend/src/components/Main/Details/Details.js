import "./Details.scss"
import RecentEntries from "./RecentEntries/RecentEntries";
import RecentCustomers from "./RecentCustomers/RecentCustomers";

const Details = () =>{
    return(
        <div className="details">
            <RecentEntries/>
            <RecentCustomers/>
        </div>
    )
}
export default Details;