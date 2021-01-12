import React, { Component } from "react";
import linkedIn from './linkedin2.png';
import github from './github.png';
import gdrive from './gdrive.png';
import './contact.css';


class Contact extends Component {
  render() {
    return (
      <div className="contactBox">
        <div className="contactIntro">
          <h1>Thanks for visiting my webpage!</h1>
          <h4> I am reachable at any time, feel free to contact me through Github or LinkedIn. My resume is also viewable through the Google Drive link below</h4>
        </div>
        
        <div className="iconbox">
          <a href='https://github.com/samus94' target='_blank'>
            <img src={github} className="icons"></img>
          </a>

          <a href='https://www.linkedin.com/in/sam-kuo-3a8ba6154/' target='_blank'>
            <img src={linkedIn} className="icons"></img>
          </a>

          <a href='https://docs.google.com/document/d/1Xd_16S8KEXp7CYP2C9J0uAi4XAw1kAsOW0scZ2wAseI/edit?usp=sharing' target='_blank'>
            <img src={gdrive} className="icons"></img>

          </a>
        </div>
      </div>
    );
  }
}
 
export default Contact;