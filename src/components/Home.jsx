import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
    return (
        <div className="home-container">
            <h1 className="heading">Teknolojik Yemekler</h1>           
            <p className="subheading">KOD ACIKTIRIR PİZZA DOYURUR</p>
            <Link to="/OrderPizza">
                <button className="order-button">ACIKTIM</button>
                </Link>
        </div>
    );
};

export default Home;