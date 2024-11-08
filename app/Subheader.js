import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function SubHeader() {
  return (
    <div className="sub-header">
      <div className="box">
        <h1 id="shop">SHOP.CO</h1>
        <div className="ancherTag">
          <a href="#" className="tags" id="shopTaag">Shop</a>
          <KeyboardArrowDownIcon id="downArrow" />
          <a href="#" className="tags">On Sale</a>
          <a href="#" className="tags">New Arrivals</a>
          <a href="#" className="tags">Brands</a>
        </div>
      </div>
      <AccountCircleIcon id="profileIcon"/>
      <ProductionQuantityLimitsIcon id ="cartIcon" />
    </div>
  );
}
