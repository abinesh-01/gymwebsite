  import React from "react";
import Header from "./header";
import "./Main.css";
import img1 from "../images/fitness-png.png"

const Main = () =>{
    return(
        <div className="home">
        <div className="left-side">
           <Header/>
           <div className="small-box">
             <span>THE BEST FITNESS CLUB IN THE TOWN</span> 
             <div></div>
           </div>
           <div className="main-text">
            <h1><span className="text-stoke">SHAPE</span> YOUR</h1>
            <div><h1>IDEAL BODY</h1></div>
           </div>
           <div className="para"><p>In here we will help you to shape and build your ideal body and live up your life to fullest</p></div>
           <div className="three-box">
            <div>
              <h2>+ 140</h2>
              <p>EXPERT COACHES</p>
            </div>
            <div>
              <h2>+ 978</h2>
              <p>MEMERS JOINED</p>
            </div>
            <div>
              <h2>+ 50</h2>
              <p>FITNESS PROGRAMS</p>
            </div>
           </div>
           <div className="main-button">
            <button className="one">Get Started</button>
            <button className="two">Learn More</button>
           </div>
           <div className="cal-box">
            <div></div>
            <div className="content">
              <p>Calories burned</p>
              <span>220 kcal</span>
            </div>
           </div>
        </div>
        <div className="right-side">
          <div><button className="right-btn">Join now</button></div>
          <div className="heart-rate">
            <div></div>
            <p>Heart Rate</p>
            <div><span className="span">116 bpm</span></div>
          </div>
          <div className="img">
            <img src={img1} alt="" />
          </div>
        </div>
        </div>
    )
}
export default Main;