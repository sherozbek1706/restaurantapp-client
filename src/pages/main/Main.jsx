import React from "react";
import { Banner, Header, Nav, RenderCell } from "../../components";
import "./main.css";
import { Korzinka } from "../../components/korzinka/korzinka";
import { Oformit } from "../../components/oformit/oformit";
export const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Banner />
      <Nav />
      <Korzinka />
      <RenderCell />
      <Oformit />
    </div>
  );
};
