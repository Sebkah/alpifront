import React from 'react';
import axios from 'axios';

import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import MenuLarge from './MenuLarge';

import Logo from './Logo';
import Menu from './Menu';

function Header() {
  const [logo, SetLogo] = useState();
  const [title, SetTitle] = useState();
  const [menuItems, SetMenuItems] = useState([]);

  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  async function getLogo() {
    try {
      const response = await axios.get('http://localhost:1337/site-config');
      console.log(response);
      const { Logo, SiteTitle } = response.data;
      SetLogo(Logo.url);
      SetTitle(SiteTitle);
    } catch (error) {
      console.error(error);
    }
  }

  async function getMenuItems() {
    try {
      const response = await axios.get('http://localhost:1337/menu');
      console.log(response);
      const { MenuItems } = response.data;
      SetMenuItems(MenuItems.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLogo();
    getMenuItems();
  }, []);

  return (
    <div className="header">
      <Logo logo={logo} />
      <h1 className="title">{title}</h1>
      {isTablet ? <Menu items={menuItems} /> : <MenuLarge items={menuItems} />}
    </div>
  );
}

export default Header;
