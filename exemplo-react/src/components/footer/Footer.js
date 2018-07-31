import React, { Component } from 'react';
import './Footer.css';
import imgFB from './faceico.png';
import imgINS from './instaico.png';
import imgTWI from './twitterico.png';

class Footer extends Component {
    render() {
        return (
            <footer>
            <p> Lorem impsu afblei gpqeijrgnr gqpiejg gqepirgqpieurgn pqierjgnq gqpiergq giqe rieurgnq .   </p>
            <div className = "botoes">
            <button>Fale Conosco!</button>
            <div className="social">
            
            <img src={imgFB} alt="Facebook"/>
            <img src={imgINS} alt="Instagram"/>
            <img src={imgTWI} alt="Twitter"/>            
            </div>   
            </div>
            </footer>            
            
        );
    }
}

export default Footer;
