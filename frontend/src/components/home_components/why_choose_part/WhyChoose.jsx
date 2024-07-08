import React from 'react'
import './WhyChoose.css'
import img1 from './img/2.png'
import img2 from './img/3.png'
import img3 from './img/4.png'
import img4 from './img/5.png'
import { motion } from 'framer-motion'
import { fadein } from '../../../Variants'

export default function WhyChoose() {
  return (
    <div className='why-choose-part'>
      <motion.div
        variants={fadein('down', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.7 }}
        className='why-choose-title-container'
      >
        <div className='why-choose-title'>
          why choose us
        </div>
        <div className='why-choose-text'>
          Dive into online courses on <br></br> diverse subjects
        </div>
      </motion.div>
      <motion.div
        variants={fadein('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.7 }}
        className='why-choose-facts'>
        <div className='why-choose-facts-row'>
          <div className='why-choose-fact'>
            <img src={img1} className='fact-img'></img>
            <div className='fact-part'>
              <p className='fact-title'>Progress Tracking and Certifications</p>
              <p className='fact-content'>Provide fratures to track users progress, such as completion percentage, module-wise performance achievements.</p>
            </div>
          </div>
          <div className='why-choose-fact'>
            <img src={img2} className='fact-img'></img>
            <div className='fact-part'>
              <p className='fact-title'>Accessibility and Convenienc</p>
              <p className='fact-content'>Provide the flexibility to learn anytime, anywhere, making education accessible to a wider audience.</p>
            </div>
          </div>
        </div>
        <div className='why-choose-facts-row'>
          <div className='why-choose-fact'>
            <img src={img3} className='fact-img'></img>
            <div className='fact-part'>
              <p className='fact-title'>Diverse Course Selection</p>
              <p className='fact-content'>Offer a vastrange of subjects and topics to choose from, allowing users to explore their interests, acquire new skills.
              </p>
            </div>
          </div>
          <div className='why-choose-fact'>
            <img src={img4} className='fact-img'></img>
            <div className='fact-part'>
              <p className='fact-title'>Interactive Learning Experience</p>
              <p className='fact-content'>Interactive elements like quizzes, exercise, and discu-ssion forums, and echancing the learning experince.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
