import React from 'react';
import { FaTwitter, FaTiktok, FaInstagram} from 'react-icons/fa';
import SimpleSlider from '../components/SimpleSlider';
import '../styles/HomeScreen.css';




export default function HomeScreen(){
    return(
        <body className='homescreen'>
            <div className="page-title">
                <h4> ALAQUOKE </h4>
            </div>
            <div className="header">
                <div className='letters'>
                    <h1 className='port-type-1'>
                        <span> P </span>
                        <span> O </span>
                        <span> R </span>
                        <span> T </span>
                        <span> F </span>
                        <span> O </span>
                        <span> L </span>
                        <span> I </span>
                        <span> O </span>
                    </h1>
                    <h1 className='port-type-2'>
                        <span> P </span>
                        <span> O </span>
                        <span> R </span>
                        <span> T </span>
                        <span> F </span>
                        <span> O </span>
                        <span> L </span>
                        <span> I </span>
                        <span> O </span>
                    </h1>
                    <h1 className='port-type-1'>
                        <span> P </span>
                        <span> O </span>
                        <span> R </span>
                        <span> T </span>
                        <span> F </span>
                        <span> O </span>
                        <span> L </span>
                        <span> I </span>
                        <span> O </span>
                    </h1>
                    <h1 className='port-type-2'>
                        <span> P </span>
                        <span> O </span>
                        <span> R </span>
                        <span> T </span>
                        <span> F </span>
                        <span> O </span>
                        <span> L </span>
                        <span> I </span>
                        <span> O </span>
                    </h1>
                    <h1 className='port-type-1'>
                        <span> P </span>
                        <span> O </span>
                        <span> R </span>
                        <span> T </span>
                        <span> F </span>
                        <span> O </span>
                        <span> L </span>
                        <span> I </span>
                        <span> O </span>
                    </h1>
                    <h1 className='port-type-2'>
                        <span> P </span>
                        <span> O </span>
                        <span> R </span>
                        <span> T </span>
                        <span> F </span>
                        <span> O </span>
                        <span> L </span>
                        <span> I </span>
                        <span> O </span>
                    </h1>
                </div>
                <div className="picture-box">
                    <img className='power-pic' src={require('../img/power.jpg')}/>
                </div>
                <div className='list-section'>
                    <ul className='social'>
                        <li><a className='link' href="#"> instagram </a></li>
                        <li><a className='link' href="#"> github </a></li>
                        <li><a className='link' href="#"> letterboxd </a></li>
                    </ul>
                </div>
            </div>
            <div className='middle-page'>
                <div className='about'>
                    <div className='picture-box2'>
                        <img className='ash-pic' src={require('../img/ash.jpg')}/>
                    </div>
                    <div className="text-about">
                        <p>text text text text text text text text text text text
text text text text text text text text text text text
text text text text text text text text text text text
text text text text text text text text text text text
text text text text text text text text text text text</p>
                    </div>
                </div>
            </div>
            <div className='end-page'>
                <div className='caroussel'>
                    <h2>FIGMA DESIGNS</h2>
                    <div className='line'></div>
                    <SimpleSlider />
                </div>
            </div>
            <div className='footer'>
                <div className='contact'>
                    <h3>Follow Me!</h3>
                    <div className='social-icons'>
                        <div className='icon1'>
                            <FaTiktok />
                        </div>
                        <div className='icon2'>
                            <FaInstagram />
                        </div>
                        <div className='icon3'>
                            <FaTwitter />
                        </div>
                    </div>
                    <div className='line2'></div>
                    <h3> Contact Me! </h3>
                    <a href="#" target='_blank' className='email'>alaquoke@gmail.com</a>
                </div>
                <div className='letters-footer'>
                    <h4>made by</h4>
                    <h1 className='alaq-type-1'> ALAQUOKE </h1>
                    <h1 className='alaq-type-2'> ALAQUOKE </h1>
                    <h1 className='alaq-type-1'> ALAQUOKE </h1>
                    <h1 className='alaq-type-2'> ALAQUOKE </h1>
                    <h1 className='alaq-type-1'> ALAQUOKE </h1>
                    <h1 className='alaq-type-2'> ALAQUOKE </h1>
                </div>
            </div>
        </body>
    )
}