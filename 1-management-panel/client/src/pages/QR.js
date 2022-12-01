import Img from "../images/QR.jpg";

function QR() {

  return (
    <div className="App">
      <div>
        <h1> QR code </h1>
      </div>
      <div>
        <img src={Img} alt="QR code" />
      </div>
      <div>
        <h2>
          <a href={Img} Target="_blank" download>
            Download QR
          </a>
        </h2>
      </div>
    </div>
  );
}

export default QR;
