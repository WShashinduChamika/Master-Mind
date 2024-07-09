import React from 'react'
import './about_body.css'
import hero_1 from './images/about_hero_1.png'
import hero_2 from './images/about_hero2.png'
import { motion } from 'framer-motion'
import { fadein } from '../../../Variants.js'

export default function about_body() {
  return (
    <div>
      <div className='container'>

        < motion.img
          variants={fadein('right', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.7 }}
          className='Hero1' src={hero_1} alt="hero_1" />

        <motion.div 
           variants={fadein('left',0.2)}
           initial='hidden'
           whileInView='show'
           viewport={{once:true,amount:0.7}}
          className='section'>
          <h1>Making Career
            <br />Change <br />
            A Reality
          </h1>
          <p>
            “Elevate your learning experience with us! Explore diverse courses <br /> tailored for success on our user-friendly online platform. Join today!"
          </p>
        </motion.div>

      </div>

      <div className='container part2'>

        <div className='section2'>
          <motion.h1
             variants={fadein('right',0.2)}
             initial='hidden'
             whileInView='show'
             viewport={{once:true,amount:0.7}}
          >
            Who are we ?
          </motion.h1>
          <motion.p
             variants={fadein('up',0.2)}
             initial='hidden'
             whileInView='show'
             viewport={{once:true,amount:0.7}}
          >
            Master Maind is a world leader in providing coding skills that enable anyone to transition to a software development career in less than a  year. The need for software engineers is growing quickly as digitisation picks up speed, and hundreds of thousands of new positions become available each month. Our online courses provide students with a clear route into these fields while emphasizing the competencies needed in an AI-driven future.
          </motion.p>
        </div>
        < motion.img 
           variants={fadein('left',0.2)}
           initial='hidden'
           whileInView='show'
           viewport={{once:true,amount:0.7}}
          className='Hero1' src={hero_2} alt="hero_2" />

      </div>

    </div>

  )
}
