import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AppleWatch from "./pages/AppleWatch";
import GalaxyWatch from "./pages/GalaxyWatch";
import MiWatch from "./pages/MiWatch";
import AmazfitWatch from "./pages/AmazfitWatch";
import { Container, Grid, Flex, Spacer, GridItem } from "@chakra-ui/react";
import RtButton from "./components/atoms/Header";
import CardOne from "./components/atoms/CardOne";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AppleWatch" element={<AppleWatch />} />
      <Route path="/GalaxyWatch" element={<GalaxyWatch />} />
      <Route path="/MiWatch" element={<MiWatch />} />
      <Route path="/AmazfitWatch" element={<AmazfitWatch />} />
    </Routes>
  );
}
