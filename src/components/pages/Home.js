import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';

function Home() {
  const [cover, SetCover] = useState();

  useEffect(() => {
    getCover();
  }, []);

  async function getCover() {
    try {
      const response = await axios.get('http://localhost:1337/site-config');
      console.log(response);
      const { SiteCover } = response.data;
      console.log(SiteCover.url);
      SetCover(SiteCover.url);
    } catch (error) {
      console.error(error);
    }
  }
  const style = {
    backgroundImage: `url(${cover})`,
  };
  return <div className="home" style={style}></div>;
}

export default Home;
