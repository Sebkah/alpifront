import React from 'react';
import { Link } from 'react-router-dom';

function MenuLarge({ items }) {
  return (
    <div className="menu-large">
      {items.map(({ en, fr, slug }) => {
        return (
          <Link to={slug} className="menu-large-item">
            <p>{fr}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default MenuLarge;
