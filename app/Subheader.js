"use client";

import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { useEffect, useState } from "react";

export default function SubHeader() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will ensure the component renders only on the client.
  }, []);

  if (!isClient) return null;

  return (
    <div className="sub-header">
      <div className="box">
        <h1 id="shop">SHOP.CO</h1>
        <div className="ancherTag">
          <a href="#" className="tags" id="shopTaag">
            Shop
          </a>
          <KeyboardArrowDownIcon id="downArrow" />
          <a href="#" className="tags">
            On Sale
          </a>
          <a href="#" className="tags">
            New Arrivals
          </a>
          <a href="#" className="tags">
            Brands
          </a>
        </div>
      </div>
      <div className="inputdiv">
        <SearchOutlinedIcon id="searchIcon" />
        <input placeholder="Search for products..." id="inputbox" />
      </div>
      <AccountCircleIcon id="profileIcon" />
      <ShoppingCartOutlinedIcon id="cartIcon" />
    </div>
  );
}
