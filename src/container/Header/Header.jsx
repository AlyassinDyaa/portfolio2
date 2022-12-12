import React from 'react'
import './Header.scss'
import {motion} from "framer-motion"
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const ScaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div id="home" className = 'app__header app__flex' >
      {/*MOTION DIV 1 */}
      <motion.div
        whileInView = {{x:[-100,0], opacity: [0,1] }}
        transition = {{duration: 0.5}}
        className = "app__header-info"
      >
        <div className = 'app__header-badge'>
          <div className = 'badge-cmp app__flex'>
            <span>✌️</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello I am,</p>
              <h1 className='head-text'>Dylan Locke</h1>
              <h2 className='p-text'>AKA UNISON</h2>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>The Infinites</p>
            <p className='p-text'>Energy Based Powers</p>
          </div>

        </div>

        
      </motion.div>

       {/*MOTION DIV 2 */}
      <motion.div
        whileInView = {{ opacity: [0,1] }}
        transition = {{duration: 0.5, delayChildren: 0.5}}
        className = "app__header-img"
      >
        <img src={images.um} alt="profile-bg"/>
        {/*IMAGE DIV 1 */}
        <motion.img
           whileInView = {{ scale: [0,1] }}
           transition = {{duration: 1, ease: 'easeInOut'}}
           className = "overlay_circle"
           src={images.circle}
           alt="profile_circle"
           />
      </motion.div>
      {/*********************/}


      {/*MOTION DIV 3 */}
      <motion.div
       variants={ScaleVariants}
        whileInView = {ScaleVariants.whileInView} 
        className = "app__header-circles"
        >

        {/* DYNAMIC BUBBLES BEHIND MAIN PROFILE using dynamic array*/}
        {[images.flutter, images.redux, images.sass, images.amazon].map((circle, index)=>(
          <div className=' circle-cmp app__flex' key={`circle-${index}`}>
            <img src = {circle} alt="circle"/>
          </div>
        ))}

      </motion.div>
      {/*********************/}
    </div>
  )
}

export default AppWrap(Header, 'home');
