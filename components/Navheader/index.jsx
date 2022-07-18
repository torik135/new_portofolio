import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Navlist } from '../Utils/Navlist/index.jsx';

import {
  FaRegStar as HomeIcon,
  FaSortDown as DownIcon,
  FaSortUp as UpIcon,
} from 'react-icons/fa';
const Navheader = ({ children }) => {
  const [navUp, setNavUp] = useState(false);

  useEffect(() => {
    const linkItem = document.querySelectorAll('.link_container');

    linkItem.forEach((l, index) => {
      l.addEventListener('click', () => {
        const indicator = document.querySelector('.indicator');
        indicator.style.left = `${index * 96 + 72}px`;
      });
    });
  }, []);

  return (
    <>
      <nav className={navUp ? 'navheader navup' : 'navheader'}>
        <ul className='navheader_content'>
          <div className='link_container'>
            <Navlist link_to='#credits' icon=<HomeIcon /> text='Thanks' />
          </div>

          <div className='link_container'>
            <Navlist link_to='#home' icon=<HomeIcon /> text='Techs' />
          </div>

          <div className='link_container'>
            <Navlist link_to='#home' icon=<HomeIcon /> text='Websites' />
          </div>

          <div className='link_container'>
            <Navlist link_to='#home' icon=<HomeIcon /> text='Skills' />
          </div>

          <span className='indicator'></span>
          <div className='navtoggle' onClick={() => setNavUp(!navUp)}></div>
        </ul>
      </nav>
      {children}
    </>
  );
};

export { Navheader };
