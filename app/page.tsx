"use client";
// import { useState } from "react";
import React, { useState, useEffect } from "react";

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
import Page5 from "./page5data";
import PosterImg2 from "../public/images/PosterImg.png";
// import CloseIcon from '@mui/icons-material/Close';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StayContainer from "./StayContainer";
import LastContainer from "./Last_Container";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // default 3 items on larger screens

  const containers = [
    {
      name: "Sarah M.",
      pdata:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      pdata:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L.",
      pdata:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    { name: "fourth", pdata: "Fourth's review text goes here." },
    { name: "fifth", pdata: "Fifth's review text goes here." },
    { name: "sixth", pdata: "Sixth's review text goes here." },
    { name: "seventh", pdata: "Seventh's review text goes here." },
    { name: "eighth", pdata: "Eighth's review text goes here." },
  ];

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth <= 600) {
        setItemsToShow(1); // for small screens, show only 1 item
      } else {
        setItemsToShow(3); // for larger screens, show 3 items
      }
    };

    updateItemsToShow(); // Initial check
    window.addEventListener("resize", updateItemsToShow); // Update on resize

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleForwardClick = () => {
    if (currentIndex < containers.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBackwardClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container">
      <div className="page1">
        {/* <CloseIcon id="closeBtn" /> */}
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

        <Image
          src={PosterImg2}
          alt="poster"
          id="posterImg2"
          width={800}
          height={800}
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
        <div className=" page2Container">
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
          <h1 id="page4_heading">BROWSE BY DRESS STYLE</h1>

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

      <div className="page5">
        <h1 id="page5Header">OUR HAPPY CUSTOMERS</h1>
        <ArrowBackIcon id="backword" onClick={handleBackwardClick} />
        <ArrowForwardIcon id="forword" onClick={handleForwardClick} />

        <div className="page5Content">
          {containers
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((container) => (
              <Page5
                key={container.name}
                name={container.name}
                pdata={container.pdata}
              />
            ))}
        </div>

        <StayContainer />

        <div className="lastContanir">
          <div className="lastBoxContainer">
            <div className="lastFirstBox">
              <h1 id="lastShopHeading">Shop.p</h1>
              <p id="lastBoxParagraph">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>

              <div className="lastFirstBoxIcons">
                <TwitterIcon id="TwiterIcon" />
                <FacebookIcon id="FacebookIcon" />
                <InstagramIcon id="InstagramIcon" />
                <GitHubIcon id="GithubIcon" />
              </div>
            </div>

            <div className="lastContainerData">
              <div className="last_Both_contanir">

              <div className="last_firstAndsecond_data">
                <LastContainer
                  id="company_box"
                  heading="Company"
                  firstValue="About"
                  secondValue="Features"
                  thirdValue="Works"
                  fourthValue="Career"
                />
                <LastContainer
                  id="help_box"
                  heading="Help"
                  firstValue="Customer Support"
                  secondValue="Delivery Details"
                  thirdValue="Terms & Conditions"
                  fourthValue="Privacy Policy"
                />
              </div>

              <div className="last_thirdAndfourth_data">
                <LastContainer
                  id="faq_box"
                  heading="FAQ"
                  firstValue="Account"
                  secondValue="Manage Deliveries"
                  thirdValue="Orders"
                  fourthValue="Payments"
                />
                <LastContainer
                  id="resources_box"
                  heading="Resources"
                  firstValue="Free eBooks"
                  secondValue="Development Tutorial"
                  thirdValue="How to - Blog"
                  fourthValue="Youtube Playlist"
                />
              </div>

              </div>
            </div>
          </div>

          <div className="footer">
            <p id="footerParagraph">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="bottomLogos">
              <Image
                src="/images/Visa.png"
                alt="Visa "
                id="visa"
                width={500}
                height={300}
              />
              <Image
                src="/images/MasterCard.png"
                alt="MasterCard "
                id="masterCard"
                width={500}
                height={300}
              />
              <Image
                src="/images/Paypal.png"
                alt="PayPal "
                id="payPal"
                width={500}
                height={300}
              />
              <Image
                src="/images/IPay.png"
                alt="IPay "
                id="iPay"
                width={500}
                height={300}
              />
              <Image
                src="/images/GPay.png"
                alt="GPay "
                id="gPay"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
