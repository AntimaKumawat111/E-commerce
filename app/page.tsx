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

type PhotoProps = {
  cardNo: string;
  id: string;
  imagesrc: string;
  pvalue: string;
  rate: string;
};

function Photo({ cardNo, id, imagesrc, pvalue, rate }: PhotoProps) {
  return (
    <div className="cards" id={cardNo}>
      <div className="card">
        <Image
          src={imagesrc}
          alt="product"
          className="card_img"
          id={id}
          width={300} // Adjust width as required
          height={300} // Adjust height as required
        />
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
        <Image src={Rectangle2} alt="poster" id="posterImg" width={500} height={300} />
        <LeftContainer />
        <Image src={Vector} alt="Vector" id="vector" width={100} height={100} />
        <Image src={Vector2} alt="Vector" id="vector2" width={100} height={100} />
        <Btn id="shopBtn" />
      </div>

      <div className="page2">
        <div className="logos">
          <Image src={Versace} alt="Versace" id="versaceImg" className="logo" width={100} height={100} />
          <Image src={Zara} alt="Zara" id="ZaraImg" className="logo" width={100} height={100} />
          <Image src={Gucci} alt="Gucci" id="GucciImg" className="logo" width={100} height={100} />
          <Image src={Prada} alt="Prada" id="PradaImg" className="logo" width={100} height={100} />
          <Image
            src={CalvinKlein}
            alt="Calvin Klein"
            id="CalvinKleinImg"
            className="logo"
            width={100}
            height={100}
          />

          
          <h1 id="newArrivals">NEW ARRIVALS</h1>

          <Photo
            cardNo="one"
            id="firshirtImg"
            imagesrc="/images/frame1.png"
            pvalue="T-SHIRT WITH TAPE DETAILS"
            rate="120"
          />

          <Photo
            cardNo="second"
            id="secondshirtImg"
            imagesrc="/images/frame2.png"
            pvalue="SKINNY FIT JEANS"
            rate="240"
          />

          <Photo
            cardNo="third"
            id="thirdshirtImg"
            imagesrc="/images/frame3.png"
            pvalue="CHECKERED SHIRT"
            rate="180"
          />
          <Photo
            cardNo="fourth"
            id="fourthshirtImg"
            imagesrc="/images/frame4.png"
            pvalue="SLEEVE STRIPED T-SHIRT"
            rate="130"
          />
          <button id="viewBtn">View All</button>
        </div>
      </div>
    </div>
  );
}
