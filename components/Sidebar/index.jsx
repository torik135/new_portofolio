import { ToastContainer, toast } from 'react-toastify';

import { useState } from 'react';
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

const Sidebar = () => {
  const [hamBtn, setHamBtn] = useState(true);

  const notify = () => toast('Thank You!');

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

            <FaRegHeart id='love' onClick={notify} />

            <ToastContainer
              position='bottom-center'
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
