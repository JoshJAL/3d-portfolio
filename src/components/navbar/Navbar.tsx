import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../../styles';
import { navLinks, staticPortfolio } from '../../constants';
import { logo, menu, close } from '../../assets';
import RocketShip from '../rocketShip/RocketShip';
export default function Navbar() {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
          to='/'
          className='flex items-center gap-2 group'
        >
          <div className='h-9 w-9'>
            <RocketShip />
          </div>
          <p className='text-white text-lg font-bold cursor-pointer flex'>
            Joshua&nbsp;<span className='sm:block hidden'>Levine</span>
          </p>
        </Link>
        <ul className='list-none lg:flex flex-row gap-10 hidden'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-lg hover:text-xl font-medium cursor-pointer transition-all ease-in-out duration-300`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={link.link ? link.link : `#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar */}
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={!toggle ? menu : close}
            alt='menu'
            className='w-7 h-7 object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-gradient-to-r from-teal-700 to-violet-700 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none justify-end items-start flex-col gap-4 flex'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={link.link ? link.link : `#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li
                onClick={() => setToggle(!toggle)}
                className={'text-secondary font-poppins font-medium cursor-pointer md:hidden'}
              >
                <a href={staticPortfolio}>Static Site</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
