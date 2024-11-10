"use client";

import { useEffect, useState } from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function StayContainer() {
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    setIsData(true); // This will ensure the component renders only on the client.
  }, []);

  if (!isData) return null;

  return (
    <>
      <div className="stayContainer">
        <h3 id="staybox">STAY UPTO DATE ABOUT OUR LATEST OFFERS </h3>
        <div className="sectionRight">
          <EmailOutlinedIcon id="emailIcon"/>
          <input
            placeholder="Enter your E-mail address"
            id="sectionRightInputBox"
            type="email"
            className="sectionRightdata"
          />
          <button className="sectionRightdata" id="sectionRightButton">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </>
  );
}
