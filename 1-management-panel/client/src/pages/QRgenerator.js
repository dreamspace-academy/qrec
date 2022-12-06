import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = (id, setStaffId) => {
  const [url, setUrl] = useState("");
  const qrRef = useRef();
  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download ={id};
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };
  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor={"#ffffff"}
      level={"H"}
    />
  );
  return (
    <div>
      <div className="ui dividing header">
        <h1>QR Generator</h1>
      </div>

      <div className="qrcode__container">
        <div ref={qrRef}>{qrcode}</div>
        <br />
        <div className="input__group">
          <form onSubmit={downloadQRCode}>
            <label>ID &nbsp;</label>
            <input
              type="text"
              value={url}
              onChange={qrCodeEncoder}
            />&nbsp;
            <button type="submit" disabled={!url} className="ui blue button">
              Download
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default QrCode;