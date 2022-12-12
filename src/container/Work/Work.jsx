import React,{useState, useEffect} from 'react'
import  './Work.scss'
import {AiFillEye, AiFillGithub} from "react-icons/ai"
import {motion} from "framer-motion"
import { AppWrap, MotionWrap } from '../../wrapper';
import {urlFor, client} from "../../client"

const Work = () => {

    {/* USING QUERY TO OBTAIN DATA FROM SANITY */}
  const [works, setWork] = useState([])
  const [filterWork, setFilterWork] = useState([])
  useEffect(() => {
   const query = '*[_type == "works"]';
   client.fetch(query).then((data)=>{
    setWork(data);
    setFilterWork(data);
   })
  }, [])

  const [animateCard, setAnimateCard] = useState({y:0, opacity:1})
  const [activeFilter, setActiveFilter] = useState("All")

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };


  return (
    <>
      <h2 className='head-text'> THE TEAM IS STRONG AND POWERFUL</h2>  

      <div className="app__work-filter">
        {/* LOOPING THROUGH ALL THE CATEGORIES BY CREATING AN ARRAY*/}
        {["UI/UX", "PYTHON" ,"JAVA", "REACT", "All"].map((item, index) => (
          <div
           key={index}
           onClick = {() => handleWorkFilter(item)}
           className = {`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active": ""} `}>
              {item}
          </div>
        ))}
      </div>

      {/* 
        MOTION DIV
        1- Animated Card
        2- Image
        3- ICON 1 & 2
        4- Title
        5- Description 
        6- Tags
        - all these items are nested
      */}
      <motion.div
        animate = { animateCard } 
        transition = {{duration: 0.5, delayChildren: 0.5}}
        className = "app__work-portfolio">
          
            {filterWork.map((work, index) => (
              <div className='app__work-item app__flex' key={index}>
                <div className='app__work-img app__flex'>
                  <img src = {urlFor(work.imgUrl)} alt = {work.name}/>

                  <motion.div
                  whileHover={{opacity: [0,1]}}
                  transition= {{duration: 0.25, ease: "easeInOut", staggerChildren: 0.5}}
                  className = "app__work-hover app__flex">
                     {/* THE PROJECT LINK ICON  */}
                    <a href = {work.projectLink} target = "_blank" rel = "noreferrer">
                      <motion.div
                        whileInView = {{scale: [ 0 , 1 ]}}
                        whileHover={{scale: [ 1 , 0.9 ]}}
                        transition = {{duration: 0.25}}
                        className = "app__flex">
                            <AiFillEye/>
                      </motion.div>
                    </a>

                     {/* THE CODE LINK ICON  */}
                     <a href = {work.codeLink} target = "_blank" rel = "noreferrer">
                      <motion.div
                        whileInView = {{scale: [ 0 , 1 ]}}
                        whileHover={{scale: [ 1 , 0.9 ]}}
                        transition = {{duration: 0.25}}
                        className = "app__flex">
                            <AiFillGithub/>
                      </motion.div>
                    </a>
                  </motion.div>
                </div>

                {/* TITLE AND DESCRIPTION OF PROJECT */}
                <div className = 'app__work-content app__flex' >
                  <h4 className = 'bold-text'> {work.title} </h4>
                  <p className = 'p-text' style = {{marginTop: 10}} > {work.description} </p>
                  <div className = 'app__work-tag app__flex'>
                    <p className = 'p-text'> {work.tags[0]} </p>
                  </div>
                </div>

              </div>
            ))}
      </motion.div>
    </>
  )
}

//export default Work
export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  //'app__primarybg',
);
