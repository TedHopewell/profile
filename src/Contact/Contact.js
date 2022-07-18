import React from "react";
import { BsTwitter, BsLinkedin,BsDownload,BsGithub } from "react-icons/bs";
function Contact() {
   return (
      <div className="app__social">
         <div>
            <a href="https://github.com/TedHopewell">
                <BsGithub/>
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/molebaleng-hopewell-maome-242814aa/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="https://twitter.com/ted_hopewell">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="">
               <BsDownload />
            </a>
         </div>
        
      </div>
   );
}
export default Contact;