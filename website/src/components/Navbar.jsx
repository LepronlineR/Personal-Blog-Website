import React from 'react'
import MenuItems from './MenuItems'
import MenuItemsNewTab from './MenuItemsNewTab'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div 
        className="h-[50px] flex shadow-xl sticky top-0"
    >
        <div
            className="flex items-center w-full mx-12"
        >
            <MenuItems 
                pageName="Home"
                pageID=""
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
        <SearchBar
            className="flex items-center w-full"
        />
    </div>
  )
}

export default Navbar