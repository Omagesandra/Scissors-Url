import React from "react";
import { Link } from "react-router-dom";

const Revolution = () => {
    return (
        <div className="revolution">
            <div className="rev">
            <h3 className="rev-link">Revolutionizing Link Optimazation</h3>

            <Link to="/signup" className="rev-btn">
                <button className="sign">Get Started</button> </Link>
                 </div>
        </div>
    )
};
export default Revolution;