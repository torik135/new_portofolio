import Link from 'next/link';
import { useEffect } from 'react';
import { Navlist } from '../Utils/Navlist/index.jsx';

import { FaRegStar as HomeIcon } from 'react-icons/fa';

const Navheader = () => {
  useEffect(() => {
    const linkItem = document.querySelectorAll('.link_icon');

    linkItem.forEach((l, index) => {
      l.parentElement.addEventListener('click', () => {
        const indicator = document.querySelector('.indicator');
        indicator.style.left = `${index * 96 + 73}px`;
      });
    });
  }, []);

  return (
    <nav className='navheader'>
      <ul className='navheader_content'>
        <div className='link_container'>
          <Navlist link_to='#home' icon=<HomeIcon /> text='Home' />
        </div>

        <div className='link_container'>
          <Navlist link_to='#home' icon=<HomeIcon /> text='Home' />
        </div>

        <div className='link_container'>
          <Navlist link_to='#home' icon=<HomeIcon /> text='Home' />
        </div>

        <div className='link_container'>
          <Navlist link_to='#home' icon=<HomeIcon /> text='Home' />
        </div>

        <span className='indicator'></span>
      </ul>
    </nav>
  );
};

export { Navheader };
