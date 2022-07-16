import { useState } from 'react';

import { FaSortDown, FaSortUp } from 'react-icons/fa';

const Footer = () => {
  const [foot, setFoot] = useState(true);

  return (
    <footer
      className={foot ? 'footer up' : 'footer'}
      onClick={() => setFoot(!foot)}
    >
      <div className='footer_content'>
        <div className='footer_icon'>
          <i>{foot ? <FaSortDown /> : <FaSortUp />}</i>
        </div>
        <div className='copyright'>torik135 | 2022</div>
      </div>
    </footer>
  );
};

export { Footer };
