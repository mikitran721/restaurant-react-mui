import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner1 from "../images/banner1.jpg";
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div
        className="home"
        style={{
          backgroundImage: `url(${Banner1})`,
        }}
      >
        <div className="headerContainer">
          <h2>Food Website</h2>
          <p>Best Food In Vietnam</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
