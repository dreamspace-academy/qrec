import Img from "../images/QR.jpg";

function QR() {

  return (
    <div className='container-fluid Scroll'>
      <div className='ui dividing header'>
            <h1>QR Page</h1>
        </div>
      <div className="ui container">
        <img src={Img} alt="QR code" class="ui medium bordered rounded image" />
      </div>
      <br />
      <div>
        <h2>
          <a href={Img} Target="_blank" download>
            <button className="ui blue button ">Download QR</button> 
          </a>
        </h2>
      </div>
    </div>
  );
}

export default QR;
