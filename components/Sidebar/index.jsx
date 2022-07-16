import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GoOctoface } from 'react-icons/go';
import {
  FaAlignJustify as HamburgerIcon,
  FaRegListAlt as ProjectIcon,
  FaRegIdBadge as ContactIcon,
  FaRegStar as HomeIcon,
  FaUser,
  FaRegHeart,
  FaRegArrowAltCircleRight as ActiveIcon,
} from 'react-icons/fa';

import { Tooltip } from '../Utils/Tooltip/index.jsx';
import { Navlist } from '../Utils/Navlist/index.jsx';
import { Toast } from '../Utils/Toast/index.jsx';

const Sidebar = () => {
  const [hamBtn, setHamBtn] = useState(true);
  const [toast, setToast] = useState(false);
  let [toastText, setToastText] = useState('');
  const [clickNum, setClickNum] = useState(0);

  switch (clickNum) {
    case 1:
      toastText = 'Thank You';
      break;
    case 2:
      toastText = 'Aww You are awesome';
      break;
    case 3:
      toastText = 'Yes!!!';
      break;
    case 4:
      toastText = 'KIMOOCIIIIIII!!!!!';
      break;
    default:
      setClickNum(1);
      break;
  }

  const toastClick = () => {
    if (clickNum <= 4) {
      setClickNum((clickNum += 1));
    } else {
      setToast(false);
      setClickNum(1);
    }
  };

  return (
    <div className={hamBtn ? 'sidebar active' : 'sidebar'}>
      <div className='logo_content'>
        <div className='logo'>
          <i>
            <GoOctoface />
          </i>
          <div className='logo_name'>torik135</div>
        </div>
        <a onClick={() => setHamBtn(!hamBtn)} id='btn'>
          <ActiveIcon />
        </a>
        <ul className='nav_list'>
          <Navlist link_to='#home' icon=<HomeIcon /> text='Home'>
            <Tooltip label='Home' />
          </Navlist>

          <Navlist link_to='#projects' icon=<ProjectIcon /> text='Projects'>
            <Tooltip label='Projects' />
          </Navlist>

          <Navlist link_to='#contact' icon=<ContactIcon /> text='Contact'>
            <Tooltip label='Contact' />
          </Navlist>
        </ul>

        <div className='profile_content'>
          <div className='profile'>
            <div className='profile_detail'>
              <i>
                <FaUser />
              </i>
              <div className='name_job'>
                <div className='name'>torik</div>
                <div className='job'>Web Developer / Front End</div>
              </div>
            </div>
            <i onClick={toastClick}>
              <FaRegHeart id='love' />
            </i>
            <span className={toast ? 'show' : ''}>
              <Toast text={toastText} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
