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
          width={300}
          height={300}
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

type Page4Props = {
  cardNo: string;
  id: string;
  imagesrc: string;
};

function Page4({ cardNo, id, imagesrc }: Page4Props) {
  return (
    <div className="cards" id={cardNo}>
      <div className="card">
        <Image
          src={imagesrc}
          alt="product"
          className="card_img"
          id={id}
          width={300}
          height={300}
        />
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
        <Image
          src={Rectangle2}
          alt="poster"
          id="posterImg"
          width={500}
          height={300}
        />
        <LeftContainer />
        <Image src={Vector} alt="Vector" id="vector" width={100} height={100} />
        <Image
          src={Vector2}
          alt="Vector"
          id="vector2"
          width={100}
          height={100}
        />
        <Btn id="shopBtn" />
      </div>

      <div className="logos">
        <Image
          src={Versace}
          alt="Versace"
          id="versaceImg"
          className="logo"
          width={100}
          height={100}
        />
        <Image
          src={Zara}
          alt="Zara"
          id="ZaraImg"
          className="logo"
          width={100}
          height={100}
        />
        <Image
          src={Gucci}
          alt="Gucci"
          id="GucciImg"
          className="logo"
          width={100}
          height={100}
        />
        <Image
          src={Prada}
          alt="Prada"
          id="PradaImg"
          className="logo"
          width={100}
          height={100}
        />
        <Image
          src={CalvinKlein}
          alt="Calvin Klein"
          id="CalvinKleinImg"
          className="logo"
          width={100}
          height={100}
        />
      </div>

      <div className="page2">
        <div>
          <h1 id="newArrivals">NEW ARRIVALS</h1>

          <Photo
            cardNo="one"
            id="firstImg"
            imagesrc="/images/Frame1.png"
            pvalue="T-SHIRT WITH TAPE DETAILS"
            rate="120"
          />

          <Photo
            cardNo="second"
            id="secondtImg"
            imagesrc="/images/Frame2.png"
            pvalue="SKINNY FIT JEANS"
            rate="240"
          />

          <Photo
            cardNo="third"
            id="thirdImg"
            imagesrc="/images/Frame3.png"
            pvalue="CHECKERED SHIRT"
            rate="180"
          />
          <Photo
            cardNo="fourth"
            id="fourthImg"
            imagesrc="/images/Frame4.png"
            pvalue="SLEEVE STRIPED T-SHIRT"
            rate="130"
          />
          <button id="viewBtn">View All</button>
        </div>
      </div>

      <div className="page3">
        <h1 id="topSelling">TOP SELLING</h1>

        <Photo
          cardNo="fifth"
          id="fifthImg"
          imagesrc="/images/Frame5.png"
          pvalue="VERTICAL STRIPED SHIRT"
          rate="212"
        />

        <Photo
          cardNo="sixth"
          id="sixthImg"
          imagesrc="/images/Frame6.png"
          pvalue="COURAGE GRAPHIC T-SHIRT"
          rate="145"
        />

        <Photo
          cardNo="seventh"
          id="seventhImg"
          imagesrc="/images/Frame7.png"
          pvalue="LOOSE FIT BERMUDA SHORTS"
          rate="80"
        />

        <Photo
          cardNo="eighth"
          id="eighthImg"
          imagesrc="/images/Frame8.png"
          pvalue="FADED SKINNY JEANS"
          rate="210"
        />

        <button id="view2Btn">View All</button>
      </div>

      <div className="page4">
        <div className="middleContainer">
          <h1 id="page4browse">BROWSE BY DRESS STYLE</h1>

          <Page4 cardNo="nineth" imagesrc="/images/Frame9.png" id="ninthImg" />

          <Page4 cardNo="tenth" imagesrc="/images/Frame10.png" id="tenthImg" />

          <Page4
            cardNo="eleventh"
            imagesrc="/images/Frame11.png"
            id="eleventhImg"
          />

          <Page4
            cardNo="twelveth"
            imagesrc="/images/Frame12.png"
            id="twelvethImg"
          />
        </div>
      </div>
    </div>
  );
}
