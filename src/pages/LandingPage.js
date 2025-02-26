import { Link } from "react-router-dom";
import "../styles.css";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Paradise Nursery</h1>
            <p>Discover a variety of beautiful houseplants for your home.</p>
            <Link to="/products">
                <button>Get Started</button>
            </Link>
        </div>
    );
};

export default LandingPage;
