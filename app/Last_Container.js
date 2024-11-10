export default function LastContainer({
  heading,
  firstValue,
  secondValue,
  thirdValue,
  fourthValue,
}) {
  return (
    <>
      <div className="lastBoxtags">
        <h1 id="lastBoxHeading">{heading}</h1>
          <a href="#"className="lastBoxValue">{firstValue}</a>
          <a href="#"className="lastBoxValue">{secondValue}</a>
          <a href="#"className="lastBoxValue">{thirdValue}</a>
          <a href="#"className="lastBoxValue">{fourthValue}</a>
      </div>
    </>
  );
}
