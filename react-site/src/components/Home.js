import React, {useEffect} from "react";
import Logo from '../images/background.jpg';
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    try{
      fetch('http://localhost:3001/')
      .then((res) => res.json());
    }
    catch(err) {console.log(err);}
  });
  return (
    <>

      <div>
        <img src={Logo} alt="this is currency" width="100%" height="100%" />
        <br />
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="login">
          <button style={{
            margin: "0 auto",
            backgroundColor: "blue",
            color: "white",
            fontFamily: "Arial",
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          >enter the website</button>
        </Link>
        <br></br>
        <br></br>
        <Link to="main">
          <button style={{
            margin: "0 auto",
            backgroundColor: "blue",
            color: "white",
            fontFamily: "Arial",
            fontSize: "15px",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          >enter to Main page</button>
        </Link>
      </div>
      <br></br>
      <Footer />
    </>
  );
}

export default Home;
