import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import UseDarkMode from '../components/UseDarkMode';
import { FaEnvelopeO, FaLinkedin, FaGithub } from 'react-icons/lib/fa/';
import { Container, Row, Col } from 'reactstrap';

const Index = props => {
  const [theme, toggleTheme] = UseDarkMode();
  return (
    // <div className={`App ${theme}`}>
    //   <div>
    //     <button type="button" onClick={toggleTheme}>
    //       Switch theme
    //     </button>
    //   </div>
    <div className="c-content-box">
      <h2>Hello, my name is Glaucio!</h2>
      <HeadlineWithFocus
        modifierClassNames={`
          c-headline-focus 
          c-headline-focus--super-big 
        `}
      >
        I am a Front <br></br> End Developer
      </HeadlineWithFocus>
      <h2
        className={`
          js-action-button-anchor
          c-content-box__subheadline 
          c-content-box__subheadline--with-button
        `}
      >
        // Coding since 2016
      </h2>
      <Row>
        <Col xs="2" sm="1">
          <li>
            <a href="https://www.linkedin.com/in/glauciosantos/" target="_blank">
              <FaLinkedin />
            </a>
          </li>
        </Col>
        <Col xs="2" sm="1">
          <li>
            <a href="https://github.com/7glaucio" target="_blank">
              <FaGithub />
            </a>
          </li>
        </Col>
        <Col xs="2" sm="1">
          <li>
            <a href="mailto:dev@glaucio.me" target="_blank">
              <FaEnvelopeO />
            </a>
          </li>
        </Col>
      </Row>
    </div>
    //</div>
  );
};

export default Index;
