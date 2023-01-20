import React, { useEffect } from 'react';
import { FaTwitter, FaTiktok, FaInstagram} from 'react-icons/fa';
import SimpleSlider from '../components/SimpleSlider';
import '../styles/HomeScreen.css';




export default function HomeScreen(){

    useEffect(()=> {
        document.title = 'QuokeQuack - Portfolio';
    }, []);


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
                    <img alt='Power by CHAINSAW MAN' className='power-pic' src={require('../img/power.jpg')}/>
                </div>
                <div className='list-section'>
                    <ul className='social'>
                        <li><a className='link' rel='noreferrer' target='_blank' href="https://www.instagram.com/alaquoke/"> instagram </a></li>
                        <li><a className='link' rel='noreferrer' target='_blank' href="https://github.com/quokequack"> github </a></li>
                        <li><a className='link' rel='noreferrer' target='_blank' href="https://letterboxd.com/LolaLaCava_/"> letterboxd </a></li>
                    </ul>
                </div>
            </div>
            <div className='middle-page'>
                <div className='about'>
                    <div className='picture-box2'>
                        <img alt='Ash Lynx by BANANA FISH' className='ash-pic' src={require('../img/ash.jpg')}/>
                    </div>
                    <div className="text-about">
                        <p>Hello guys, my name is Alaquoke, I'm 18 years old and
                            currently coursing System's Development at Alagoas'
                            Federal Institute. I'm quit more into Front-End than 
                            Back-End, but I can do both. I love chicken Cup Noodles 
                            and Lana del Rey, rock, The Beatles, Harry Potter and 
                            animes, as you can see :)
                        </p>
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
                        <a className='icon'><FaTiktok className='icon1' /></a>
                        <a className='icon'><FaInstagram className='icon2' /></a>
                        <a className='icon'><FaTwitter className='icon3' /></a>
                    </div>
                    <div className='line2'></div>
                    <h3> Contact Me! </h3>
                    <a href="mailto:alaquoke@gmail.com" rel='noreferrer' target='_blank' className='email'>alaquoke@gmail.com</a>
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