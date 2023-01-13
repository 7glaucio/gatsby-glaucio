import React from 'react';
import Link from 'gatsby-link';
import Obfuscate from 'react-obfuscate';
import { FaBook, FaWrench, FaPaperPlaneO } from 'react-icons/lib/fa';

const ForHomePageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>I'm so glad</b>
      <br /> you're somehow interested in my work.
    </p>
    <p>
    Besides thanking you, I would like to point out that I am open to new job offers abroad.
    </p>
    <p>
    If you wanna talk about such matter, send me a email message through {' '}
      <b>
        <Obfuscate email="dev@glaucio.me" />
      </b>
      .
    </p>
    <p>Thanks and feel free to nose around!</p>
  </div>
);

const ForContactPageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>I'm so glad</b>
      <br /> you're somehow interested in my work.
    </p>
    <p>
    Besides thanking you, I would like to point out that I am open to new job offers abroad.
    </p>
    <p>
    If you wanna talk about such matter, send me a email message through {' '}
      <b>
        <Obfuscate email="dev@glaucio.me" />
      </b>
      .
    </p>
    <p>Thanks and feel free to nose around!</p>
  </div>
);

const RemarkScreen = props => {
  const links = [
    { path: 'portfolio', icon: FaPaperPlaneO }
  ];

  return (
    <div
      className={`c-remark-screen ${props.isActive &&
        'c-remark-screen--is-active'}`}
    >
      {props.locationPathName === '/'
        ? ForHomePageContent
        : ForContactPageContent}
      {props.locationPathName === '/' && (
        <div className="c-remark-screen__links">
          {links.map(link => (
            <Link
              key={link.path}
              className="c-remark-screen__link"
              to={`/${link.path}/`}
              onClick={props.onClick}
              tabIndex={props.isActive ? '1' : '-1'}
            >
              <link.icon /> {link.path}
            </Link>
          ))}
          
        </div>
      )}
      {/* <div className="c-remark-screen__links" /> */}
    </div>
  );
};

export default RemarkScreen;
