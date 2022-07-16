import Link from 'next/link';
import { useEffect } from 'react';
import { Navlist } from '../Utils/Navlist/index.jsx';

import { FaRegStar as HomeIcon } from 'react-icons/fa';

const Navheader = () => {
  useEffect(() => {
    const linkItem = document.querySelectorAll('.link_container');
    linkItem.forEach((l, index) => {
      l.addEventListener('click', (e) => {
        const indicator = document.querySelector('.indicator');
        indicator.style.left = `${index * 96 + 73}px`;
      });
    });
  }, []);

  return (
    <nav className='navheader'>
      <ul className='navheader_content'>
        <span className='link_container'>
          <Navlist link_to='#home' icon=<HomeIcon /> text='Home' />
        </span>

        <span className='link_container'>
          <Navlist link_to='#home' icon=<HomeIcon /> text='Home' />
        </span>

        <span className='link_container'>
          <Navlist link_to='#home' icon=<HomeIcon /> text='Home' />
        </span>

        <span className='link_container'>
          <Navlist link_to='#home' icon=<HomeIcon /> text='Home' />
        </span>

        <span className='indicator'></span>
      </ul>
    </nav>
  );
};

export { Navheader };
