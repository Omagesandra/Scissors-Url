import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {

    return(
        <>
        <div>
            <h1>Welcome to your dashboard</h1>
            <h2>Are you new here and wants to create a link:</h2>
            <Link to="/dashboard/new-link">Click here</Link>
            <h2>Not new here, <Link to="./dashbord/my-links">Check My Links</Link></h2>
        </div>
        </>
    )
}
export default Dashboard;