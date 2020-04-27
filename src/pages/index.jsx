import React from 'react';
import { Layout, SocialMenu } from '../components';

import './index.scss';

export default () => (
  <Layout>
    <div className="home-content-wrapper">
      <div className="text-wrapper">
        <p className="congrats">Hello, I&apos;m</p>
        <h1>
          Ventsislav
          <br />
          Dimitrov
        </h1>
        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <SocialMenu />
        <div className="buttons-wrapper">
          <button type="button" className="btn filled">Portfolio</button>
          <button type="button" className="btn">CV</button>
        </div>
      </div>
      <div className="image-wrapper">
        <img src="../../../images/ventsi-main-image.png" alt="Ventsislav Dimitrov" />
      </div>
    </div>
  </Layout>
);
