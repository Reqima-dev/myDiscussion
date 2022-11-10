import React from "react";
import Side from "../../sideContent/side/Side";
import Life from "../life/Life";
import Musics from "../musics/Musics";
import Popular from "../popular/Popular";
import Ppost from "../Ppost/Ppost";
import "./style.css";

const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <Popular />
            <Ppost />
            <Life />
            <Musics />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
