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
      <span>Conheça meus</span> Projetos Entregues
      </HeadlineWithFocus>
      <br />
      <Container>
        <Row>
          <Col xs="12" sm="5">
            <h1>Foca na Internet</h1>
            {
              <img
                src={require('../images/artisticbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Branding e site da minha agência de um homem só, criado com HTML, CSS, JavaScript e Bootstrap.
              <br />
              <br />
              <a href="https://focanainternet.com.br" target="_blank">
                <center>Acessar Site</center>
              </a>
            </p>
          </Col>
          <Col xs="12" sm="5">
            <h1>Bem Viver Odonto</h1>
            {
              <img
                src={require('../images/rlbbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Site desenvolvido para clínica odontológica com o uso de HTML, CSS, PHP, Wordpress e MySQL.
              <br />
              <br />
              <a href="https://bemviverodonto.com.br" target="_blank">
                <center>Acessar Site</center>
              </a>
            </p>
            
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="5">
            <br />
            <h1>Portal Foca Ribeirão</h1>
            {
              <img
                src={require('../images/cannacurabanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
            <br />
            Portal de notícias locais desenvolvido com PHP, HTML, CSS, Wordpress, e banco de dados MySQL.
              <br />
              <br />
              <a href="https://focaribeirao.com.br" target="_blank">
                <center>Acessar Site</center>
              </a>
            </p>
          </Col>
          <Col xs="12" sm="5">
            <br />
            <h1>Assessoria Esportiva</h1>
            {
              <img
                src={require('../images/flavolutionbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Site desenvolvido para empresa de agenciamento esportivo com HTML, CSS, PHP, Wordpress e MySQL.
              <br />
              <br />
              <a href="https://easassessoria.com.br/" target="_blank">
                <center>Acessar Site</center>
              </a>
            </p>
            
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="5">
            <br />
            <h1>NextStrain - Coronavírus</h1>
            {
              <img
                src={require('../images/hangtownbanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Tradução de relatório completo e interativo para Português. Trabalhando com Python e Git.
              <br />
              <br />
              <a href="https://nextstrain.org/narratives/ncov/sit-rep/pt/2020-03-05" target="_blank">
                <center>Acessar Site</center>
              </a>
            </p>

           
          </Col>
          <Col xs="12" sm="5">
            <br />
            <h1>Canaã Kids Buffet Infantil</h1>
            {
              <img
                src={require('../images/dronebanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Site desenvolvido para espaço de festas infantis com HTML, CSS, PHP, Wordpress e MySQL.
              <br />
              <br />
              <a href="https://canaaeventos.com.br/" target="_blank">
                <center>Acessar Site</center>
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
              Site desenvolvido para corretora de seguros com HTML, CSS, PHP, Wordpress e MySQL.
              <br />
              <br />
              <a href="https://rotgerseguros.com.br" target="_blank">
                <center>Acessar Site</center>
              </a>
            </p>

           
          </Col>
          <Col xs="12" sm="5">
            <br />
            <h1>Divisão Engenharia</h1>
            {
              <img
                src={require('../images/divisaobanner.jpg')}
                width={300}
                height={100}
                mode="fit"
              />
            }
            <p>
              <br />
              Site desenvolvido para engenheiro civil com HTML, CSS, PHP, Wordpress e MySQL.
              <br />
              <br />
              <a href="https://divisaoeng.com.br/" target="_blank">
                <center>Acessar Site</center>
              </a>
            </p>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};
