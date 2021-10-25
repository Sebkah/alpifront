import React from 'react';
import { Link } from 'react-router-dom';

function PopUpMenu({ items }) {
  return (
    <div className="pop-up-menu">
      <p className="menu-item">Menu</p>
      {items.map(({ en, fr, slug }) => {
        return (
          <Link to={slug} className="menu-item">
            <p>{fr}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default PopUpMenu;
