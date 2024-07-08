import React from 'react'
import './community_expert.css'
import Exp1 from './images/exp1.png'
import Exp2 from './images/exp2.png'
import Exp3 from './images/exp3.png'
import Exp4 from './images/exp4.png'
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadein } from '../../../Variants.js'


export default function community_expert() {

    let expertList = [
        {
            name: "Mr. Jackson Lewis",
            profession: "Web Developer",
            img: Exp1,
        },
        {
            name: "Mrs. Lvy Ember",
            profession: "Data Analytics",
            img: Exp2,
        },
        {
            name: "Mr. Harryson Baxston",
            profession: "Senior Professor",
            img: Exp3,
        },
        {
            name: "Mr. Jackson Lewis",
            profession: "Web Developer",
            img: Exp4,
        }
    ]
    return (
        <div className='comunity-container'>
            <motion.div
                variants={fadein('down', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.7 }}
                className='text'>
                <h2>Community express</h2>
                <p>“Elevate your learning experience with us! Explore diverse courses tailored for success on our user-friendly online platform. Join today!"</p>

            </motion.div>

            <motion.div
                variants={fadein('up', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.7 }}
                className='experts'>

                {expertList.map((expert, index) => (
                    <div className='expert' key={index}>
                        <img src={expert.img} alt='Exp1' />
                        <h4>{expert.name}</h4>
                        <p>{expert.profession}</p>
                        <div className='pro-links'>
                            <div className='icon'>
                                <FaFacebook className='i' size={20} style={{ color: "#05375B", marginRight: "1rem" }} />
                            </div>
                            <div className='icon'>
                                <FaInstagram className='i' size={20} style={{ color: "#05375B", marginRight: "1rem" }} />
                            </div>
                            <div className='icon'>
                                <FaLinkedin className='i' size={20} style={{ color: "#05375B", marginRight: "1rem" }} />
                            </div>

                        </div>

                    </div>
                ))}


            </motion.div>

        </div>
    )
}
