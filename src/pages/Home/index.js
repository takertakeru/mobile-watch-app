import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../../components/atoms/Header";
import CardOne from "../../components/atoms/CardOne";
import CardTwo from "../../components/atoms/CardTwo";
import CardThree from "../../components/atoms/CardThree";
import CardFour from "../../components/atoms/CardFour.js";

import "../../index";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <h1 className="heading-primary">
        Find your suitable <span>watch now.</span>
      </h1>
      <div className="box__container-one">
        <Link to="/AppleWatch">
          <CardOne />
        </Link>
        <Link to="/GalaxyWatch">
          <CardTwo />
        </Link>
      </div>
      <div className="box__container-two">
        <Link to="/MiWatch">
          <CardThree />
        </Link>
        <Link to="/AmazfitWatch">
          <CardFour />
        </Link>
      </div>
    </div>
  );
}
