import React, { Component } from 'react';
import '../style/Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


class Footer extends Component {
    state = {  }
    render() { 
        return (
  
            <div class="footer-container">
      <div class="footer">
        <div class="footer-heading footer-1">
          <h2>About Us</h2>
          <a href="page 2.html">JAck Mag</a>
          <a href="#">demo</a>
          <a href="#">term of use</a>
        </div>
        <div class="footer-heading footer-1">
          <h2>Contact us</h2>
          <a href="#">job</a>
          <a href="#">donate</a>
          <a href="#">contact</a>
        </div>
        <div class="footer-heading footer-1">
          <h2>Social Media</h2>
          
          <a href="#"><FaInstagram/></a>
          <a href="#"><FaTelegram/></a>
          <a href="#"><FaGithub/></a>
          
        </div>
      </div>
    </div>

          );
    }
}
 
export default Footer;