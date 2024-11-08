"use client";

import Header from "./Header";
import SubHeader from "./Subheader";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // This will ensure the component renders only on the client.
  }, []);

  if (!isClient) return null;

  return (
    <div className="container">
      <div className="page1">
        <Header />
        <SubHeader />
        <div className="inputdiv">
          <SearchOutlinedIcon id="searchIcon" />
          <input placeholder="Search for products..." id="inputbox" />
        </div>
      </div>
    </div>
  );
}