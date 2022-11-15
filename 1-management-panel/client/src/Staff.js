const staff = () => {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" />
          <p className="text-center fs-2 fw-bold">Staff Management</p> 
          <div className="container-fluid ">
            <div className="card" style={{width: '10rem'}}>
              <img src="./images.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Name</h5>
                <p className="card-text">ID</p>
                <a href="#" className="btn btn-primary">Details</a>
              </div>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div className="container-fluid ">
              <div className="card" style={{width: '10rem'}}>
                <img src="./images.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">ID</p>
                  <a href="#" className="btn btn-primary">Details</a>
                </div>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
          </div>
        </div>
        
      );
}
  
export default Staff;