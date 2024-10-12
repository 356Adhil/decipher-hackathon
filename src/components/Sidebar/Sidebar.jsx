import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import SidebarProfileSkeleton from '../ProfileSkeleton/SidebarProfileSkeleton';
function Sidebar() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    const htmlElement = document.documentElement;
    const isDarkModeEnabled = htmlElement.classList.contains('dark');

    if (isDarkModeEnabled) {
      htmlElement.classList.remove('dark');
      setTheme('light');
    } else {
      htmlElement.classList.add('dark');
      setTheme('dark');
    }
  }

  return (
    <div className="my-7 w-full border-r-2 border-borderSecondary px-7 font-spaceMono dark:border-borderColor md:h-[90vh] md:w-[23%] md:px-2 lg:px-7">
      <div className="mb-2 flex h-12 items-center gap-2.5">
        <div className="text-secondaryColor dark:text-white">
          {/* <FontAwesomeIcon icon={faCode} size="2xl" /> */}
        </div>
        <a href="https://dev-find.vercel.app/">
          <div className="flex text-[1.5rem] font-bold md:text-[1rem] lg:text-[1.5rem]">
            <p className="text-secondaryColor dark:text-white">Villa</p>
            <p className="text-textSecondary">.Connect</p>
          </div>
        </a>
        <div className="ml-auto">
          
          <button
            type="button"
            className="h-10 w-10 cursor-pointer rounded-lg border-2 border-borderSecondary bg-white transition-all hover:border-textSecondary hover:text-textSecondary dark:border-borderColor dark:bg-textPrimary dark:text-white dark:hover:border-textSecondary dark:hover:text-textSecondary"
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <FontAwesomeIcon icon={faMoon} fontSize="1rem" />
            ) : (
              <FontAwesomeIcon icon={faSun} fontSize="1rem" />
            )}
          </button>
        </div>
      </div>
      <div className="text-secondaryColor dark:text-white">Discover and Connect with Fellow Villa Mates.</div>
     
     <h2 className='font-bold text-2xl mt-4 uppercase ' > Projects </h2>
       
      <div className='mt-2' >
        <SidebarProfileSkeleton/>
      </div>
    </div>
    
  );
}

export default Sidebar;
