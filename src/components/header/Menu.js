import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import PopUpMenu from './PopUpMenu';

function Menu({ items }) {
  const [isMenuOpen, SetMenu] = useState(false);

  return (
    <div className="menu">
      <FontAwesomeIcon
        className="burger-icon"
        icon={faBars}
        onClick={() => {
          SetMenu(!isMenuOpen);
        }}
      />

      {isMenuOpen && <PopUpMenu items={items} />}
    </div>
  );
}

export default Menu;
