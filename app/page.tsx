"use client";

import Image from "next/image";
import Header from "./Header";
import SubHeader from "./Subheader";
import Rectangle2 from "../public/images/Rectangle2.png";
import LeftContainer from "./LeftContanir";
import Vector from "../public/images/Vector.png";
import Vector2 from "../public/images/Vector2.png";
import Btn from "./Bttn";
import Zara from "../public/images/Zara.png";
import Versace from "../public/images/Versace.png";
import Gucci from "../public/images/Gucci.png";
import Prada from "../public/images/Prada.png";
import CalvinKlein from "../public/images/CalvinKlein.png";

function Photo({ cardNo, id, imagesrc, pvalue, rate }: any) {
  return (
    <div className="cards" id={cardNo}>
      <div className="card">
        <img src={imagesrc} alt="product" className="card_img" id={id} />
        <div className="card_info">
          <a href="" target="_blank">
            <p id="ptitle">{pvalue}</p>
            <p id="pstars">stars</p>
            <p id="prate">${rate}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

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

      <div className="page2">
        <div className="logos">
          <Image src={Versace} alt="Versace" id="versaceImg" className="logo" />
          <Image src={Zara} alt="Zara" id="ZaraImg" className="logo" />
          <Image src={Gucci} alt="Gucci" id="GucciImg" className="logo" />
          <Image src={Prada} alt="Prada" id="PradaImg" className="logo" />
          <Image
            src={CalvinKlein}
            alt="Calvin Klein"
            id="CalvinKleinImg"
            className="logo"
          />
          <h1 id="newArrivals">NEW ARRIVALS</h1>

          <Photo
            cardNo="one"
            id="firshirtImg"
            imagesrc="/images/frame1.png"
            title="First Image"
            sname="first"
            pvalue="T-SHIRT WITH TAPE DETAILS"
            rate="120"
          />

          <Photo
            cardNo="second"
            id="secondshirtImg"
            imagesrc="/images/frame2.png"
            title="First Image"
            sname="first"
            pvalue="SKINNY FIT JEANS"
            rate="240"
          />

          <Photo
            cardNo="third"
            id="thirdshirtImg"
            imagesrc="/images/frame3.png"
            title="First Image"
            sname="first"
            pvalue="CHECKERED SHIRT"
            rate="180"
          />
          <Photo
            cardNo="fourth"
            id="fourthshirtImg"
            imagesrc="/images/frame4.png"
            title="First Image"
            sname="first"
            pvalue="SLEEVE STRIPED T-SHIRT"
            rate="130"
          />
          <button id="viewBtn">View All</button>
        </div>
      </div>
    </div>
  );
}
