import React from 'react'
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import "./Project.scss";
import ProjectData from './ProjectData'
import Contact from '../Contact/Contact';
function Projects() {
   return (
      <>
        
         <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin:'20px' }}>
         <img src="https://avatars.githubusercontent.com/u/105056745?s=96&amp;v=4" alt="@TedHopewell" size="48" height="48" width="48" data-view-component="true" class="avatar circle mr-3" />
            <h1 style={{margin:'5px',textShadow:' 0 0 25px rgba(146,200,62,0.87)'}}>
               Hopewell Maome
            </h1>

         </div>
         
        <Contact/>
        

         <motion.div
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
         >
            {ProjectData.map((work, index) => (
               <div className="app__work-item app-flex" key={index}>
                  <div className="app__work-img app-flex">
                     <img src={work.imageUrl} alt="work"></img>
                     <motion.div
                        className="app__work-hover app-flex"
                        whileHover={{ opacity: [1, 1] }}
                        transition={{
                           duration: 0.25,
                           ease: " easeInOut",
                           staggerChildren: 0.5,
                        }}
                     >
                        <a
                           href={work.projectLink}
                           target="blank"
                           rel="noreferrer"
                        >
                           <motion.div
                              whileInView={{ scale: [0, 1] }}
                              whileHover={{ scale: [1, 0.4] }}
                              transition={{ duration: 0.25 }}
                              className="app__flex"
                           >
                              <AiFillEye />
                           </motion.div>
                        </a>
                        <a href={work.codeLink} target="blank" rel="noreferrer">
                           <motion.div
                              whileInView={{ scale: [0, 1] }}
                              whileHover={{ scale: [1, 0.4] }}
                              transition={{ duration: 0.25 }}
                              className="app__flex"
                           >
                              <AiFillGithub />
                           </motion.div>
                        </a>
                     </motion.div>
                  </div>
                  <div className="app__work-content app__flex">
                     <h4 className="bold-text">{work.title}</h4>
                     <p className="p-text" style={{ marginTop: 10 }}>
                        {work.description}
                     </p>
                     <div className="app__work-tag app__flex">
                        <p className="p-text">{work.tag} </p>
                     </div>
                  </div>
               </div>
            ))}
            
         </motion.div>
         
               
         
      </>

   )
}

export default Projects
