import React from 'react'
import MenuItems from './MenuItems'
import MenuItemsNewTab from './MenuItemsNewTab'
import { faLinkedin, faTwitch, faYoutube, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div 
        className="h-[100px] flex top-0"
    >
        <div
            className="flex items-center w-full mx-12"
        >
            <MenuItems
                pageName="Blog"
                pageID="articles"
            />
            <MenuItems 
                pageName="About Me"
                pageID="about-me"
            />
            <MenuItemsNewTab 
                websiteName="https://lepronliner.github.io/portfolio/" 
                pageName="Portfolio"           
            />
        </div>
        <div
            className="flex items-center w-full ml-80"
        >
            <MenuItems 
                pageName = {
                    <FontAwesomeIcon icon={faHomeLg} className="scale-[2]"/>
                }
                pageID = ""
            />
        </div>
        <div
            className="flex items-center mx-12"
        >
            <MenuItemsNewTab 
                websiteName="https://www.linkedin.com/in/zhizheng1/"
                pageName = {
                    <FontAwesomeIcon icon={faLinkedin} className="scale-150 mr-16"/>
                }
            />
            <MenuItemsNewTab 
                websiteName="https://www.twitch.tv/fzsav"
                pageName = {
                    <FontAwesomeIcon icon={faTwitch} className="scale-150 mr-16"/>
                }
            />
            <MenuItemsNewTab 
                websiteName="https://www.youtube.com/channel/UCd3Yj4spgtDW5O1WV1HgNag"
                pageName = {
                    <FontAwesomeIcon icon={faYoutube} className="scale-150 mr-16"/>
                }
            />
            <MenuItemsNewTab 
                websiteName="https://github.com/LepronlineR"
                pageName = {
                    <FontAwesomeIcon icon={faGithub} className="scale-150 mr-16"/>
                }
            />
            <MenuItemsNewTab 
                websiteName="https://fzsav.itch.io"
                pageName = {
                    <FontAwesomeIcon icon={faItchIo} className="scale-150 mr-16"/>
                }
            />
        </div>
    </div>
  )
}

export default Navbar