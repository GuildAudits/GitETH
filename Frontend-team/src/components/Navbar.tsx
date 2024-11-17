import {  Navbar } from 'flowbite-react';
import { useState } from 'react';
import { Button } from './ui/button';
import CustomBtn from './CustomBtn';
// import { DarkThemeToggle } from 'flowbite-react';

export default function Navigation() {
    const [activeLink, setActiveLink] = useState('Home'); // Initial active link

  return (
    <Navbar className="fixed w-full z-50 bg-opacity-90 dark:bg-opacity-5 backdrop-blur-sm">
      <Navbar.Brand href="/">
        <img src="/EthOpenSource.svg" alt="logo" />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <Button className='hover:bg-transparent bg-transparent text-white'>Login</Button>
        <CustomBtn text={`Login with Github`} colored="yes"/>
        {/* <DarkThemeToggle /> */}
        <Navbar.Toggle />
      </div>
    


      <Navbar.Collapse className='border-[#293056] border rounded-full p-2'>
      <div
          className={`${
            activeLink === 'Home' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
          }`}
        >
          <Navbar.Link
            href="#"
            active={activeLink === 'Home'}
            onClick={() => setActiveLink('Home')}
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
          >
            Community
          </Navbar.Link>
        </div>
      </Navbar.Collapse>

    </Navbar>
  );
}
