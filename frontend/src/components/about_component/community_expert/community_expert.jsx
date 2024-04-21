import React from 'react'
import './community_expert.css'
import Exp1 from './images/exp1.jpg'
import Exp2 from './images/exp2.jpg'
import Exp3 from './images/exp3.jpg'
import Exp4 from './images/exp4.jpg'
import { FaFacebook ,FaLinkedin,FaInstagram} from "react-icons/fa";

const community_expert = () => {
  return (
    <>
    <div className='comtainer'>
        <div className='text'>
            <h2>Community express</h2>
            <p>“Elevate your learning experience with us! Explore diverse courses tailored for success on our user-friendly online platform. Join today!"</p>

        </div>
        <div className='experts'>
            <div className='expert'>
                <img src={Exp1} alt='Exp1'/>
                <h4>Mr. Jackson Lewis</h4>
                <p>Web Developer</p>
                <div className='pro-links'>
                    <div className='icon'>
                        <FaFacebook className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}} />
                    </div>
                    <div className='icon'>
                        <FaInstagram className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}}/>
                    </div>
                    <div className='icon'>
                        <FaLinkedin className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}} />
                    </div>

                </div>

            </div>
            <div className='expert'>
                <img src={Exp2} alt='Exp2'/>
                <h4>Mrs. Lvy Ember</h4>
                <p>Data Analytics</p>
                <div className='pro-links'>
                    <div className='icon'>
                        <FaFacebook className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}} />
                    </div>
                    <div className='icon'>
                        <FaInstagram className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}}/>
                    </div>
                    <div className='icon'>
                        <FaLinkedin className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}} />
                    </div>

                </div>

            </div>
            <div className='expert'>
                <img src={Exp3} alt='Exp3'/>
                <h4>Mr. Davies Smith</h4>
                <p>UI/UX Engineer</p>
                <div className='pro-links'>
                    <div className='icon'>
                        <FaFacebook className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}} />
                    </div>
                    <div className='icon'>
                        <FaInstagram className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}}/>
                    </div>
                    <div className='icon'>
                        <FaLinkedin className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}} />
                    </div>

                </div>

            </div>
            <div className='expert'>
                <img src={Exp4} alt='Exp4'/>
                <h4>Mr. Harryson Baxston</h4>
                <p>Senior Professor</p>
                <div className='pro-links'>
                    <div className='icon'>
                        <FaFacebook className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}} />
                    </div>
                    <div className='icon'>
                        <FaInstagram className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}}/>
                    </div>
                    <div className='icon'>
                        <FaLinkedin className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}} />
                    </div>

                </div>

            </div>
        </div>

    </div>
    
    
    
    
    </>
  )
}

export default community_expert