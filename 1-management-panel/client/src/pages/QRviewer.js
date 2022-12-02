import Img from "../images/QR.jpg";
import { Card, Image, Reveal, Button } from 'semantic-ui-react'


function QR() {

  return (
    <div className='container-fluid Scroll'>
      <div className='ui dividing header'>
        <h1>QR Viewer</h1>
      </div>
      <br />
      <div >
        <img src={Img} alt="QR code" class="ui medium bordered rounded image left aligned item" />
      </div>
      <br />
      <div>
        <h2>
          <a href={Img} Target="_blank" download>
            <Button class="ui right blue labled button">
              Download
            </Button>
          </a>
        </h2>
      </div>
    </div>
  );
}

export default QR;
