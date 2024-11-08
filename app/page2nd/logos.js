// Next.js Image component ko import karna hoga
import Image from "next/image";

function Photo({ cardNo, id, imagesrc, pvalue, rate }) {
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

export default function Logos() {
  return (
    <>
      <div className="logos">
        <Image
          src="public/images/Versace.png"
          alt="Versace"
          id="versaceImg"
          className="logo"
          width={100}
          height={100}
        />
        <Image
          src="public/images/Zara.png"
          alt="Zara"
          id="ZaraImg"
          className="logo"
          width={100}
          height={100}
        />
        <Image
          src="public/images/Gucci.png"
          alt="Gucci"
          id="GucciImg"
          className="logo"
          width={100}
          height={100}
        />
        <Image
          src="public/images/Prada.png"
          alt="Prada"
          id="PradaImg"
          className="logo"
          width={100}
          height={100}
        />
        <Image
          src="public/images/CalvinKlein.png"
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
          imagesrc="public/images/frame1.png"
          pvalue="T-SHIRT WITH TAPE DETAILS"
          rate="120"
        />

        <Photo
          cardNo="second"
          id="secondshirtImg"
          imagesrc="public/images/frame2.png"
          pvalue="SKINNY FIT JEANS"
          rate="240"
        />

        <Photo
          cardNo="third"
          id="thirdshirtImg"
          imagesrc="public/images/frame3.png"
          pvalue="CHECKERED SHIRT"
          rate="180"
        />
        <Photo
          cardNo="fourth"
          id="fourthshirtImg"
          imagesrc="public/images/frame4.png"
          pvalue="SLEEVE STRIPED T-SHIRT"
          rate="130"
        />

        <button id="viewBtn">View All</button>
      </div>
    </>
  );
}
