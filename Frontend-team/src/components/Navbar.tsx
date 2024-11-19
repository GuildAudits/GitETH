import {  Navbar } from 'flowbite-react';
import { useState } from 'react';
import { Button } from './ui/button';
import CustomBtn from './CustomBtn';
// import { DarkThemeToggle } from 'flowbite-react';

export default function Navigation() {
    const [activeLink, setActiveLink] = useState('Home'); // Initial active link

  return (
    <Navbar className="fixed w-full z-50 bg-opacity-90 dark:bg-opacity-5 backdrop-blur-sm py-6 px-5">
      <Navbar.Brand href="/">
        <img src="/EthOpenSource.svg" alt="logo" className='w-28 md:w-44'/>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <CustomBtn text={`Login with Github`} colored="yes" style="hidden md:flex"/>
        {/* <DarkThemeToggle /> */}
        <Navbar.Toggle className='w-8 h-8 flex items-center justify-center'/>
      </div>
    


      <Navbar.Collapse className='border-[#293056] border rounded-full p-2'>
      <div
          className={`${
            activeLink === 'Home' ? 'border-[#293056] border rounded-full p-2 ' : 'p-2'
          }`}
        >
          <Navbar.Link
            href="#"
            active={activeLink === 'Home'}
            onClick={() => setActiveLink('Home')}
            className={`${
              activeLink === 'Home' ? ' bg-gray-800 rounded-3xl' : ''
            }`}
          >
            Home
          </Navbar.Link>
        </div>
        <div
          className={`${
            activeLink === 'Projects' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
          }`}
        >
          <Navbar.Link
            href="#"
            active={activeLink === 'Projects'}
            onClick={() => setActiveLink('Projects')}
            className={`${
              activeLink === 'Projects' ? ' bg-gray-800 rounded-3xl' : ''
            }`}
          >
            Projects
          </Navbar.Link>
        </div>
        <div
          className={`${
            activeLink === 'Contributors' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
          }`}
        >
          <Navbar.Link
            href="#"
            active={activeLink === 'Contributors'}
            onClick={() => setActiveLink('Contributors')}
            className={`${
              activeLink === 'Contributors' ? ' bg-gray-800 rounded-3xl' : ''
            }`}
          >
            Contributors
          </Navbar.Link>
        </div>
        <div
          className={`${
            activeLink === 'Rewards' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
          }`}
        >
          <Navbar.Link
            href="#"
            active={activeLink === 'Rewards'}
            onClick={() => setActiveLink('Rewards')}
            className={`${
              activeLink === 'Rewards' ? ' bg-gray-800 rounded-3xl' : ''
            }`}
          >
            Rewards
          </Navbar.Link>
        </div>
        <div
          className={`${
            activeLink === 'Community' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
          }`}
        >
          <Navbar.Link
            href="#"
            active={activeLink === 'Community'}
            onClick={() => setActiveLink('Community')}
            className={`${
              activeLink === 'Community' ? ' bg-gray-800 rounded-3xl' : ''
            }`}
          >
            Community
          </Navbar.Link>
        </div>
      </Navbar.Collapse>

    </Navbar>
  );
}
