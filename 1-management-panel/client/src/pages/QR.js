import qr from "../images/QR.jpg";

function QR() {
  
  return (
    <div className="App">
      <div> <h1> QR code </h1> </div>
      <div>
      <img src= {qr} alt="QR code"/>
      </div>
      <div>
        <h2> <a 
        href={qr} Target="_blank" download> Download QR
        </a> </h2>
      </div>
    </div>
  );
}

export default QR;
