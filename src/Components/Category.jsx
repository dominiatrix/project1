import React from "react";
import antenne from "../assets/Group 48.png";
import avion from "../assets/Group 51.png";
import micro from "../assets/Group 50.png";
import param from "../assets/Group 49.png";

function Category() {
  return (
    <>
      <div className="container etoile" style={{ marginTop: "8vh" }}>
        <div className="category-title text-center">CATEGORY</div>
        <div className="offer-title text-center big-title1">
          We Offer Best Services
        </div>
    <div className="container">
        <div className="row row-cols-1 row-cols-lg-4  row-cols-md-2 row-cols-sm-2 g-4 mt-5">
          <div className="col col-card">
            <div className="card category-card" style={{ width: "18rem" }}>
              <center>
                <img
                  src={antenne}
                  className="card-img-top antenne text-center"
                  alt="..."
                />
              </center>
              <div className="card-body">
                <h5 className="card-title category-subtitle">
                  Calculated Weather
                </h5>
                <p className="card-text category-content">
                  Built Wicket longer <br/> admire do barton <br/>  vanity itself do in it.
                </p>
              </div>
            </div>
          </div>
          <div className="col avion-back col-card">
            <div className="card category-card" style={{ width: "18rem" }} >
              <center>
                <img
                  src={avion}
                  className="card-img-top antenne text-center"
                  alt="..."
                />
              </center>
              <div className="card-body">
                <h5 className="card-title category-subtitle">
                Best Flights
                </h5>
                <p className="card-text category-content">
                Engrossed listening.<br/>  Park gate sell they<br/>  west hard for the.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-card">
            <div className="card category-card" style={{ width: "18rem" }}>
              <center>
                <img
                  src={micro}
                  className="card-img-top micro text-center"
                  alt="..."
                />
              </center>
              <div className="card-body">
                <h5 className="card-title category-subtitle">
                Local Events
                </h5>
                <p className="card-text category-content">
                Barton vanity itself do<br/>  in it. Preferd to men it<br/>  engrossed listening. 
                </p>
              </div>
            </div>
          </div>
          <div className="col col-card">
            <div className="card category-card" style={{ width: "18rem" }}>
              <center>
                <img
                  src={param}
                  className="card-img-top param text-center"
                  alt="..."
                />
              </center>
              <div className="card-body">
                <h5 className="card-title category-subtitle">
                Customization
                </h5>
                <p className="card-text category-content">
                We deliver outsourced <br/> aviation services for <br/> military customers
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Category;
