import React, { Component } from "react";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import "../styles/slick.css";
import '../styles/slick-theme.css';
import '../styles/SimpleSlider.css';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:2000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className='carousel'>
                <Slider {...settings}>
                    <div className='design-page'>
                        <div className='bkg-1'>
                            <div className='elipse'></div>
                            <Link className='link' to='/fd'> The French Dispatch</Link>
                        </div>
                    </div>
                    <div className='design-page'>
                        <div className='bkg-2'>
                            <div className='elipse'></div>
                            <Link className='link' to='/co'> A Clockwork Orange </Link>
                        </div>
                    </div>
                    <div className='design-page'>
                        <div className='bkg-3'>
                            <div className='elipse'></div>
                            <Link className='link' to='/dps'> Dead Poets Society </Link>
                        </div>
                    </div>
                    <div className='design-page'>
                        <div className='bkg-4'>
                            <div className='elipse'></div>
                            <Link className='link' to='/rm'> Resume </Link>
                        </div>
                    </div>
                    <div className='design-page'>
                        <div className='bkg-5'>
                            <div className='elipse'></div>
                            <Link className='link' to='/ldr'> Lana del Rey </Link>
                        </div>
                    </div>
                    <div className='design-page'>
                        <div className='bkg-6'>
                            <div className='elipse'></div>
                            <Link className='link' to='/int'> Interpreta </Link>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}