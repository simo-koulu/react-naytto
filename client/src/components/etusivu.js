import "./etusivu.css";

function Etusivu({ logout }) {
  return (
    <div className="etusivu">
      <h1 className="tervetuloa-message">Tervetuloa</h1>
      <h2 className="logout-message">{logout}</h2>
    </div>
  );
}

export default Etusivu;
