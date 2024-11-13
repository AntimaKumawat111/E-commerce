export default function LastContainer({
  heading,
  firstValue,
  secondValue,
  thirdValue,
  fourthValue,
  id
}) {
  return (
    <>
      <div className="lastBoxtags" >
        <div className="lastnames" id={id}>

        <h1 id="lastBoxHeading">{heading}</h1>
        <a href="#" className="lastBoxValue">
          {firstValue}
        </a>
        <a href="#" className="lastBoxValue">
          {secondValue}
        </a>
        <a href="#" className="lastBoxValue">
          {thirdValue}
        </a>
        <a href="#" className="lastBoxValue">
          {fourthValue}
        </a>
        </div>
      </div>
    </>
  );
}
