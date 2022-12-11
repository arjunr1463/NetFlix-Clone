import NavBar from "./NavBar";
import Banner from "./Banner";
import Post from "./post";
import Footer from "./footer"
import {
  Documentaries,
  ActionMovies,
  RomanceMovies,
  ComedyMovies,
  HorrorMovies,
  trending
} from "../../url";

import React from "react";

function main() {
  return (
    <div className="bg-black overflow-x-hidden">
      <NavBar />
      <Banner />
      <Post url={trending} title="Netflix Originals" />
      <Post url={ActionMovies} title="Action" isSmall />
      <Post url={ComedyMovies} title="Comedy" isSmall />
      <Post url={HorrorMovies} title="Horror" isSmall />
      <Post url={RomanceMovies} title="Romance" isSmall />
      <Post url={Documentaries} title="Documentaries" isSmall />
      <Footer/>
    </div>
  );
}

export default main;
