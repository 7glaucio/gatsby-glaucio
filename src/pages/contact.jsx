import React from 'react';
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Obfuscate from 'react-obfuscate';
import { FaEnvelopeO, FaLinkedin, FaGithub } from 'react-icons/lib/fa/';
import Helmet from 'react-helmet';

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Entre em Contato" />

      <HeadlineWithFocus>
        Entre em contato <span>quando quiser</span>
      </HeadlineWithFocus>
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <FaEnvelopeO />
          <Obfuscate email="dev@glaucio.me" />
        </li>
        <li className="c-contact-list__item">
          <FaLinkedin />
          <a
            href="https://linkedin.com/in/glauciosantos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            /glauciosantos
          </a>
        </li>
        <li className="c-contact-list__item">
          <FaGithub />
          <a
            href="https://github.com/7glaucio"
            target="_blank"
            rel="noopener noreferrer"
          >
            7glaucio
          </a>
        </li>
      </ul>
      <h2
        className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
      >
        Mas não se esqueça...
      </h2>
    </div>
  );
};
