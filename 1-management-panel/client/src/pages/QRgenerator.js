import { useEffect, useState } from 'react';
import { doc } from 'firebase/firestore';

function QR({ id, getStaffId }) {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode
      (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }

  return (
    <div className='container-fluid Scroll'>

      <div className="ui dividing header">
        <h1>QR Code Generator</h1>
      </div>

      <div className='ui small header'> The selected staff's database ID : {id} </div>
      <br />

      <div className="input-box">
        <div className="ui large focus input">

          <input type="text" onChange={(e) => { setTemp(e.target.value) }} />

          <button className="ui blue large compact button"
            onClick={handleClick}>
            Generate
          </button>

        </div>

        <div className="extra">
          {/* <h5>Background Color:</h5>
          <input type="color" onChange={(e) => { setBgColor(e.target.value.substring(1)) }} /> */}
          <h5>Dimension:</h5>
          <input type="range" min="200" max="600"
            value={size} onChange={(e) => { setSize(e.target.value) }} />
        </div>
      </div>

      <div className="output-box">
        <img src={qrCode} alt="QR" />
        <a href={qrCode} download="QRCode">
          <button type="button" className='ui blue button'>Save</button>
        </a>
      </div>
    </div>
  );
}

export default QR;