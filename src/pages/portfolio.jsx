import React from 'react';
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Obfuscate from 'react-obfuscate';
import { FaEnvelopeO, FaTwitter, FaGithub } from 'react-icons/lib/fa/';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="Portfolio" />
      <HeadlineWithFocus>
      <span>Check out some of </span> my projects
      </HeadlineWithFocus>
      <br />
      <Container>
        <Row>
          <Col xs="12" sm="5">
            <h1>Foca na Internet</h1>
            {
              <img
                src={require('../images/focabanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Branding and site of my one-man agency, created with HTML, CSS, JavaScript and Bootstrap.
              <br />
              <br />
              <a href="https://focanainternet.com.br" target="_blank">
                <center>Visit Website</center>
              </a>
            </p>
          </Col>
          <Col xs="12" sm="5">
            <h1>Bem Viver Odonto</h1>
            {
              <img
                src={require('../images/bemviverbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Website developed for dental clinic using HTML, CSS, PHP, Wordpress and MySQL.
              <br />
              <br />
              <a href="https://bemviverodonto.com.br" target="_blank">
                <center>Visit Website</center>
              </a>
            </p>
            
          </Col>
        </Row>
        <Row>
        <Col xs="12" sm="5">
            <br />
            <h1>Rotger Seguros</h1>
            {
              <img
                src={require('../images/rotgerbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Website developed for insurance broker using HTML, CSS, PHP, Wordpress and MySQL.
              <br />
              <br />
              <a href="https://rotgerseguros.com.br" target="_blank">
                <center>Visit Website</center>
              </a>
            </p>

           
          </Col>
          <Col xs="12" sm="5">
            <br />
            <h1>Sports Consultancy</h1>
            {
              <img
                src={require('../images/easbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Website developed for sports agency company using HTML, CSS, PHP, Wordpress and MySQL.
              <br />
              <br />
              <a href="https://easassessoria.com.br/" target="_blank">
                <center>Visit Website</center>
              </a>
            </p>
            
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="5">
            <br />
            <h1>NextStrain - Coronavirus</h1>
            {
              <img
                src={require('../images/nextstrainbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Translation of interactive report into Portuguese. Working with Python and Git.
              <br />
              <br />
              <a href="https://nextstrain.org/narratives/ncov/sit-rep/pt/2020-03-05" target="_blank">
                <center>Visit Website</center>
              </a>
            </p>

           
          </Col>
          <Col xs="12" sm="5">
            <br />
            <h1>Bandeirante Editorial</h1>
            {
              <img
                src={require('../images/bandeirantebanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Website developed for book publisher using HTML, CSS, PHP, Wordpress and MySQL.
              <br />
              <br />
              <a href="https://bandeiranteeditorial.com.br/" target="_blank">
                <center>Visit Website</center>
              </a>
            </p>
           
          </Col>
        </Row>

        <Row>
        <Col xs="12" sm="5">
            <br />
            <h1>Vox News STZ</h1>
            {
              <img
                src={require('../images/voxbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Local news portal developed with HTML, CSS, PHP, Wordpress and MySQL.
              <br />
              <br />
              <a href="https://voxstz.com.br" target="_blank">
                <center>Visit Website</center>
              </a>
            </p>

           
          </Col>
          <Col xs="12" sm="5">
            <br />
            <h1>DJ Morbi</h1>
            {
              <img
                src={require('../images/morbibanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Website developed for professional DJ using HTML, CSS, PHP, Wordpress and MySQL.
              <br />
              <br />
              <a href="https://djmorbi.com.br/" target="_blank">
                <center>Visit Website</center>
              </a>
            </p>
            
          </Col>
        </Row>

      </Container>
    </div>
  );
};
