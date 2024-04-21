import React from 'react'
import './WhyChoose.css'
import img1 from './img/2.png'
import img2 from './img/3.png'
import img3 from './img/4.png'
import img4 from './img/5.png'

export default function WhyChoose() {
  return (
    <div className='why-choose-part'>
      <div className='why-choose-title'>
          why choose us
      </div>
      <div className='why-choose-text'>
          Dive into online courses on <br></br> diverse subjects
      </div>
      <div className='why-choose-facts'>
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
      </div>
    </div>
  )
}
