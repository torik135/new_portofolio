import Link from 'next/link';
import { useEffect } from 'react';
import { Navlist } from '../Utils/Navlist/index.jsx';

import { FaRegStar as HomeIcon } from 'react-icons/fa';

const Navheader = ({ children }) => {
  useEffect(() => {
    const linkItem = document.querySelectorAll('.link_container');

    linkItem.forEach((l, index) => {
      l.addEventListener('click', () => {
        const indicator = document.querySelector('.indicator');
        indicator.style.left = `${index * 96 + 73}px`;
      });
    });
  }, []);

  return (
    <>
      <nav className='navheader'>
        <ul className='navheader_content'>
          <div className='link_container'>
            <Navlist link_to='#credits' icon=<HomeIcon /> text='Thanks' />
          </div>

          <div className='link_container'>
            <Navlist link_to='#home' icon=<HomeIcon /> text='Techs' />
          </div>

          <div className='link_container'>
            <Navlist link_to='#home' icon=<HomeIcon /> text='Lives' />
          </div>

          <div className='link_container'>
            <Navlist link_to='#home' icon=<HomeIcon /> text='Skills' />
          </div>

          <span className='indicator'></span>
        </ul>
      </nav>
      {children}
    </>
  );
};

export { Navheader };
