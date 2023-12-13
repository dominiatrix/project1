import React, { useState, useEffect } from "react";
import Assume from "../Assume.png";
import Pref from "../pref.png";
import Yle from "../yle.png";

function MainComponent() {
  const images = ["girl.png", "girlblack.png"];
  const images1 = ["alt.png", "altblack.png"];
  const images2 = ["hand.png", "handblack.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const [showPref, setShowPref] = useState(true);
  const [showYle, setShowYle] = useState(false);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //     setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images1.length);
  //     setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShowPref(false);
  //     setShowYle(true);
  //     setTimeout(() => {
  //       setShowPref(true);
  //       setShowYle(false);
  //     }, 2000);
  //   }, 4000); 

  //   return () => clearInterval(interval);
  // }, []);


  return (
    <>
    <div className="container" id="jadoo">
      <div className="row">
        <div className="col">
          <div className="prem-title text-uppercase">Best Destinations around the world</div>
          <div className="big-title under">Travel, enjoy and live a new and full life</div>
          <p className="myte">Built Wicket longer admire do barton vanity itself do in it. 
          <br/>Preferred to sportsmen it engrossed listening. Park gate <br/> sell they west hard for the.</p>
          <div  className="mt-3">
           <button type="button" className="btn btn-warning btnFind poppins py-2 px-3">Find out more</button>
          <button type="button" className="btn playbtn"></button>
          <span className="poppins mygray">Play Demo</span>
          </div>
        </div>
        <div className="col trav">
          <div className="row">
          <div className="avion1 col"></div>
          <div className="avion2 col"></div>
          </div>
        </div>
      </div>
    </div>
    </>
    // <div>
    //   <div
    //     className="d-flex justify-content-center align-items-center"
    //     style={{ height: "90vh" ,  zIndex: 1 ,}}
    //   >
    //     <div className="square square-small-top-right appear"></div>
    //     <div className="square square-center">
    //       <div className="row mt-5" style={{ marginLeft: "4vw" }}>
    //         <div
    //           className="col background-animation mt-5"
    //           style={{
    //             backgroundImage: `url(${process.env.PUBLIC_URL}/Daily/${images[currentImageIndex]})`,
    //           }}
    //         ></div>
    //         <div
    //           className="col cen background-animation"
    //           style={{
    //             backgroundImage: `url(${process.env.PUBLIC_URL}/Daily/${images1[currentImageIndex1]})`,
    //           }}
    //         ></div>
    //         <div
    //           className="col deu mt-5"
    //           style={{
    //             backgroundImage: `url(${process.env.PUBLIC_URL}/Daily/${images2[currentImageIndex2]})`,
    //           }}
    //         ></div>
    //       </div>
    //     </div>
    //     <div className="square square-small-bottom-left appear"></div>
    //   </div>
    //   <img
    //      style={{ zIndex: 10, position: "absolute",width: '64vw', marginTop: '-24vw',marginLeft: '16vw' }}
    //     src={Assume}
    //     alt="Assume Image"
    //   />
    //    {showPref && (
    //     <img className="down"
    //       style={{ zIndex: 10, position: "absolute", width: '52vw', marginTop: '-16vw', marginLeft: '23vw', transition: 'margin-top 1s, opacity 1s' }}
    //       src={Pref}
    //       alt="Pref Image"
    //     />
    //   )}

    //   {/* Yle Image */}
    //   {showYle && (
    //     <img className="down1"
    //       style={{ zIndex: 10, position: "absolute", width: '52vw', marginTop: '-12vw', marginLeft: '23vw', transition: 'margin-top 1s, opacity 1s' }}
    //       src={Yle}
    //       alt="Yle Image"
    //     />
    //   )}
    //   {/* <div className="d-flex justify-content-center align-items-center" >
    //   <div
    //     className="square d-flex justify-content-center align-items-center"
    //     style={{ border: '2px solid white', height:'800px', width:'861px', marginLeft:'174px', marginTop:'50px' }}
    //   >
       
    //   </div>
    //   <div className="square square2 d-flex justify-content-center align-items-center"   style={{ border: '2px solid white', height:'158px', width:'159px', marginLeft:'', marginTop:'' }}>
    //     Carré 2
    //   </div>
    //   <div className="square square2 d-flex justify-content-center align-items-center"   style={{ border: '2px solid white', height:'158px', width:'159px', marginLeft:'-228px', marginTop:'846px' }}>
    //     Carré 2
    //   </div>
    // </div> */}
    // </div>
  );
}

export default MainComponent;
