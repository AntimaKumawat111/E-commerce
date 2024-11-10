
export default function Page5({ name, pdata }) {
  return (
    <div className="page5ContanirData">
      <div className="page5MiddleContanir">
        <h2 className="stars">Stars</h2>
        <h2 className="name">{name}</h2>
        <p className="paragraph">
          {pdata}
        </p>
      </div>
    </div>
  );
}