import React from "react";
import Logo from '../images/background.jpg';
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MainPage from "./Main_page";

function Home() {
  return (
    <>

      <div>
        <img src={Logo} alt="this is currency" width="100%" height="100%" />
        <br />
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="log_in">
          <button style={{
            margin: "0 auto",
            backgroundColor: "white",
            color: "black",
            fontFamily: "Arial",
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          >enter the website</button>
        </Link>
      </div>
      <br></br>
      <Footer />
    </>
  );
}

export default Home;
