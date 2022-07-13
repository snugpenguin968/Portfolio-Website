import React from 'react'
import './Header.scss';
import {motion} from 'framer-motion'
import {images} from '../../constants'
import {AppWrap} from '../../wrapper'
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (

  
  
  <div className="app__header app__flex">
    
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          
          <div style={{ marginLeft: 20 }}>
            
            <div className="title">
            <h1 className="head-text">CS PROJECT PORTFOLIO</h1>
            </div>
            <div className="myname">
            <h3 className="p-text">John Tian</h3>
            </div>
            <div className="random_description">
            <p className="p-text">Exploring the world of computer science</p>
            
            </div>

            
          </div>
        </div>
        <div className="backgroundimg">
      <img src={images.homebackground} alt="homebackground"/>
    </div>
        

        
      </div>
    </motion.div>
    

    
  </div>
);

export default AppWrap(Header,'home')