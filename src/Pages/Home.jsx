import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (<div style={{height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px"}}>Homepage</h1>
        <p style={{ fontSize: "18px", marginBottom: "20px"}}> 
            This project created by {" "}
            <a href="icontech" style={{ color: "#87CEFA", textDecoration: "none" }}>
                iCONTech
            </a>
            .  Quickly use below links to navigate through all pages.
        </p>
        <ul style={{ listStyle: "none", padding: "0" }}>
            <li style={{ marginBottom: "10px" }}>
                <Link to="/signup" style={{ color: "#87CEFA", textDecoration: "none" }}>
                SignUp
                </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
                <Link to="/login" style={{ color: "#87CEFA", textDecoration: "none" }}>
                LogIn
                </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
                <Link to="/desktop1" style={{ color: "#87CEFA", textDecoration: "none" }}>
                Desktop1
                </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
                <Link to="/desktop2" style={{ color: "#87CEFA", textDecoration: "none" }}>
                Desktop2
                </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
                <Link to="/desktopfour" style={{ color: "#87CEFA", textDecoration: "none" }}>
                DesktopFour
                </Link>
            </li>
        </ul>
    </div>
    );
};
export default Home;