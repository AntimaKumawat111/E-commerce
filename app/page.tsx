"use client";

import Image from "next/image";
import Header from "./Header";
import SubHeader from "./Subheader";
import Rectangle2 from "../public/images/Rectangle2.png";
import LeftContainer from "./LeftContanir";
import Vector from "../public/images/Vector.png";
import Vector2 from "../public/images/Vector2.png";
import Btn from "./Bttn";

export default function Home() {
  return (
    <div className="container">
      <div className="page1">
        <Header />
        <SubHeader />
        <Image src={Rectangle2} alt="poster" id="posterImg" />
        <LeftContainer />
        <Image src={Vector} alt="Vector" id="vector" />
        <Image src={Vector2} alt="Vector" id="vector2" />
        <Btn id="shopBtn" />
        
      </div>
    </div>
  );
}
