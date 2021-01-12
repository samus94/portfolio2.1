import React, { Component } from "react";
import './Home.css';
import TicTac from './tictacspecial.png'
import GameShare from './GameShare.png'



class Home extends Component {
  render() {
    return (
      <div className="homeSlot">
        <div className="homeGrid">
          <div className="fullStack">
            <h2>Full Stack</h2>
            <h4>Web developter, designing applications for mobile phones and desktop using CSS, HTML, Node, React, and Ruby. </h4>
          </div>

          <div className="gifSlot">
          </div>

          <div className="gameDesigner">
            <div className="designerText">
              <h2>Aspiring Game Designer</h2>
              <h4>
                My goal is to put the skills I've learned as a full-stack web developer and bring it to the gaming industry by becoming a full-fledged game developer. As a gamer of many years, I have learned from game designs that have succeeded, and more imporantly those that have failed. 
              </h4>
            </div>
          </div>


        </div>  

        <div className="recentProjects">
          <h1>Recent Projects</h1>
        </div>

        <div className="projectSlot"> 

          <div className="image-box">
              <div className="image-container">
                <a href='https://github.com/samus94/TicTacSpecial' target='_blank' >
                  <img src={TicTac} className="project-image" ></img>
                </a>

                <div className="project-name">
                  <p>Tic-Tac-Special</p>
              </div>
              </div>           

              {/* <div className="project-name">
                  <p>Tic-Tac-Special</p>
              </div> */}
          </div>

          <div className="image-box"> 
            <div className="image-container">
              <a href='https://github.com/samus94/Project-Two' target='_blank'>
                <img src={GameShare} className="project-image" ></img>
              </a>
              <div className="project-name">
                <p>Gameshare</p>
              </div>
            </div>  

          </div>

        </div>
        
      </div>

    );
  }
}
 
export default Home;