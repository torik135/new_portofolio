import Link from 'next/link';

import { Tooltip } from '../../Utils/Tooltip/index.jsx';

const Navlist = ({ link_to = '#link', icon, text, children }) => {
  return (
    <li>
      <Link href={link_to}>
        <a>
          <i className='link_icon'>{icon}</i>
          <span className='link_name'>{text}</span>
        </a>
      </Link>
      {children}
    </li>
  );
};

export { Navlist };
