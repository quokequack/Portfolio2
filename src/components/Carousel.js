import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Carousel.css';

export default function Carousel(){

    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, []);

    return(
        <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
            <motion.div
            className='inner'
            drag='x'
            dragConstraints={{ right: 0, left: - width}}
            >
                <motion.div className='slide1'>
                    <div className='elipse'></div>
                    <Link className='link' to='/ldr'>Lana Del Rey</Link>
                </motion.div>
                <motion.div className='slide2'>
                    <div className='elipse'></div>
                    <Link className='link' to='/co'>A Clockwork Orange</Link>
                </motion.div>
                <motion.div className='slide3'>
                    <div className='elipse'></div>
                    <Link className='link' to='/fd'>The French Dispatch</Link>
                </motion.div>
                <motion.div className='slide4'>
                    <div className='elipse'></div>
                    <Link className='link' to='/dps'>Dead Poets Society</Link>
                </motion.div>
                <motion.div className='slide5'>
                    <div className='elipse'></div>
                    <Link className='link' to='/inter'>Interpreta</Link>
                </motion.div>
                <motion.div className='slide6'>
                    <div className='elipse'></div>
                    <Link className='link' to='/rm'>Resume</Link>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}