import React , {useState, useEffect} from 'react'
import './About.scss'
import {motion} from 'framer-motion'
import {images} from "../../constants"
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

{/** 
// ADDING STATIC 
const abouts = [
  {
    title: "Mr Dream",
    description: "Into Entropy",
    img: images.about01
  },

  {
    title: "Lazron",
    description: "Core",
    img: images.about02
  },

  {
    title: "Hunted",
    description: "SPEC",
    img: images.about03
  },

  {
    title: "The Elites",
    description: "ELITE",
    img: images.about04
  }] ;
*/}




const About = () => {
//ADDING DYNAMIC OBJECTS TO MY LIST ABOUT
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);



  return (
    <>
    <h2 className='head-text'>
      <span>Never </span>
      deprive someone of 
      <span> hope </span> <br/>
      it may be 
      <span> all </span>
      that they have
    </h2>  

    <div id= "about" className='app__profiles'>
      {abouts.map((about, index) => (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5 , type: 'tween'}}
          className = "app__profile-item"
          key = {about.title + index}
         >
          <img src={urlFor(about.imgUrl)} alt= {about.title}/>
          <h2 className='bold-text' style={{marginTop: 20}}> {about.title}</h2>
          <p className='p-text' style={{marginTop: 10}}> {about.description}</p>

          </motion.div>
      ))}
    </div>
    </>
  )
}

//export default About
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  //'app__whitebg',
);
