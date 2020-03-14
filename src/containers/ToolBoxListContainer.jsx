import React from "react";
import ToolBoxList from "../components/ToolBoxList";
import ToolBoxPopOver from "../components/ToolBoxPopOver";
import FaUser from "react-icons/lib/fa/user";

class ToolBoxListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.itemListOnClickHandler = this.itemListOnClickHandler.bind(this);
    this.popOverOnClickHandler = this.popOverOnClickHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.windowClickHandler = this.windowClickHandler.bind(this);
    this.windowKeyDownHandler = this.windowKeyDownHandler.bind(this);
    this.deactivatePopOver = this.deactivatePopOver.bind(this);

    this.state = {
      items: [
        {
          id: 1,
          label: "JavaScript",
          description: `Nos dias de hoje, o <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> está mais em alta do que nunca. Sendo uma linguagem interpretada extremamente versátil para web.`,
          comment: `Tenho bastante prática com JS no dia-a-dia desde 2016 por meio de frameworks. Ultimamente tenho estudado <b>Vanilla</b>.`
        },
        /*{
          id: 2,
          label: "ES6",
          description: `It's a pseudonym for the latest version of the 
            <a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" target="_blank">
            ECMAScript</a> aka JavaScript.`,
          comment: `ES6 makes coding easier.`
        },*/
        {
          id: 3,
          label: "HTML5",
          description: `Essa é a linguagem de marcação usada para estruturar e apresentar conteúdo na internet. 
             `,
          comment: `Não há web sem <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">HTML</a>`
        },
        {
          id: 4,
          label: "CSS / CSS3",
          description: `O <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">CSS</a> adiciona estilo ao seu documento HTML, fazendo-o mais bonito visualmente.`,
          comment: `CSS deixa a rede mais apresentável!`
        },
        {
          id: 21,
          label: "Bootstrap",
          description: `Tecnologia web de código aberto criado pelo Twitter lá pelos anos 2010, visando melhor experiência em dispositivos móveis. `,
          comment: `O <a href="https://en.wikipedia.org/wiki/Bootstrap" target="_blank">Bootstrap</a> é o melhor amigo do mobile!`
        },
        {
          id: 6,
          label: "Git",
          description: `O Git é um sistema de <a href="https://en.wikipedia.org/wiki/Git" target="_blank">controle de versão</a> usado pra acompanhar atualizações e mudanças em arquivos de forma organizanada.`,
          comment: `Não há trabalho em equipe sem Git!`
        },
        {
          id: 19,
          label: "Github",
          description: `Serviço de hospedagem de controle de versão Git em repositórios no ambiente web.`,
          comment: `Acesse o meu <a href="https://github.com/7glaucio" target="_blank">Github</a>`
        },
        {
          id: 7,
          label: "PHP",
          description:`Linguagem para criação de aplicações que atuam por trás das cortinas, do lado do servidor.`,
          comment: `Minha experiência com PHP é trabalhando há vários anos com Wordpress.`
        },
        /*{
          id: 9,
          label: "Gatsby",
          description: `A static PWA (Progressive Web App) 
            <a href="https://www.gatsbyjs.org/" target="_blank">generator</a>. Gatsby lets 
            you build blazing-fast sites with your data, whatever the source.`,
          comment: `The website you are looking at now is built with Gatsby.`
        },*/
        {
          id: 20,
          label: "MySQL",
          description: `Sistema de gerenciamento de banco de dados <a href="https://pt.wikipedia.org/wiki/MySQL" target="_blank">SQL</a>, sendo um dos mais utilizados no mundo.`,
          comment: `Tenho anos de experiência com MySQL trabalhando com temas e plugins Wordpress.`
        },
        /*{
          id: 10,
          label: "VueJS",
          description: `An open-source JavaScript framework for building user interfaces and single-page applications.
            <a href="https://vuejs.org/" target="_blank">platform</a>.`
        },*/
        {
          id: 15,
          label: "Wordpress",
          description: `Sistema livre e aberto de gestão de conteúdo para internet amplamente utilizado para fins diversos. Usado em milhões de sites.`,
          comment: `Já criei inúmeros sites usando a tecnologia, como 
            <a href="http://bemviverodonto.com.br/" target="_blank">esse aqui</a> e
            <a href="https://easassessoria.com.br/" target="_blank">esse outro</a>.`
        },
        {
        id: 16,
        label: 'Mídias Sociais',
        description: `Muitas empresas e profissionais autônomos optam por gestores de redes sociais para cuidarem de seus perfis.`,
        comment: `Desde 2016 atendo empresas, para as quais administro <a href="http://facebook.com.br/focanainternet" target="_blank">Facebook</a> e <a href="http://instagram.com/focanainternet" target="_blank">Instagram</a>.`
        },
        {
        id: 17,
        label: 'Adobe Photoshop',
        description: `Como minha porta de entrada no mundo do TI foi o Web Design, sempre aproveitei minha experiência com edição de imagens em meus projetos de site.`,
        comment: `Além de Photoshop, tenho prática no uso do <a href="https://pt.wikipedia.org/wiki/Adobe_Fireworks" target="_blank">Adobe Fireworks</a>.`
        },
        {
          id: 76,
          label: 'Inglês',
          description: `Proficiência em uma segunda língua se tornou obrigação nos dias de hoje, sobretudo o inglês que é falado no mundo todo.`,
          comment: `Morei durante 3 anos e meio na região de <a href="https://pt.wikipedia.org/wiki/Boston" target="_blank">Boston</a>, portanto <i>chill out and trust me</i>.`
          }
      ],
      activatedItem: null,
      popOver: {
        isActive: false,
        topPx: "auto",
        bottomPX: "auto",
        leftPx: "auto",
        rightPx: "auto",
        description: "",
        comment: ""
      },
      popOverPosition: null
    };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.windowResizeHandler, false);
      window.addEventListener("click", this.windowClickHandler, false);
      window.addEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.windowResizeHandler, false);
      window.removeEventListener("click", this.windowClickHandler, false);
      window.removeEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  windowKeyDownHandler(e) {
    if (this.state.activatedItem && e.which == 27) {
      this.deactivatePopOver();
    }
  }

  windowResizeHandler() {
    if (this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  windowClickHandler(e) {
    const isValidClickTarget =
      e.target.nodeName === "A" || e.target.nodeName === "BUTTON"
        ? true
        : false;
    if (!isValidClickTarget && this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  itemListOnClickHandler(e, id) {
    const anchor = {
      offsetTop: e.target.offsetTop,
      offsetLeft: e.target.offsetLeft,
      offsetWidth: e.target.offsetWidth,
      offsetHeight: e.target.offsetHeight
    };
    /*
      check why the initial shape of the code does'n work in iPhone 4
      it semas as array.find() function is not transpiled corectlyu
      const popOver = this.state.items.find(el => el.id === id);
    */
    const popOver = this.state.items.filter(el => el.id === id)[0];
    this.positionPopOver(anchor, popOver);

    this.setState(() => ({
      activatedItem: id
    }));
  }

  positionPopOver(anchor, popOver) {
    const popWidth = 200;
    const popHeight = 100;
    const body = document.querySelector("body");

    const spaceUnder =
      body.offsetHeight - anchor.offsetTop - anchor.offsetHeight;
    const spaceOnRight =
      body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth;

    const verticalPositionUnder = spaceUnder >= anchor.offsetTop ? true : false;
    const horizontalPositionOnRight =
      spaceOnRight >= anchor.offsetLeft ? true : false;

    const verticalPosition = verticalPositionUnder
      ? anchor.offsetTop
      : anchor.offsetTop - popHeight + anchor.offsetHeight;
    const horizontalPosition = horizontalPositionOnRight
      ? anchor.offsetLeft
      : anchor.offsetLeft - popWidth + anchor.offsetWidth;

    const topPx = verticalPositionUnder
      ? `${anchor.offsetTop + anchor.offsetHeight}px`
      : `auto`;
    const bottomPx = verticalPositionUnder
      ? `auto`
      : `${body.offsetHeight - anchor.offsetTop}px`;
    const leftPx = horizontalPositionOnRight
      ? `${anchor.offsetLeft}px`
      : `auto`;
    const rightPx = horizontalPositionOnRight
      ? `auto`
      : `${body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth}px`;
    const positionUnderModifierClass = "";

    this.setState(() => ({
      popOver: {
        isActive: true,
        topPx: topPx,
        bottomPx: bottomPx,
        leftPx: leftPx,
        rightPx: rightPx,
        modifierClasses: `${positionUnderModifierClass}`,
        description: popOver.description,
        comment: popOver.comment
      },
      popOverPosition: verticalPositionUnder ? "under" : "above"
    }));
  }

  popOverOnClickHandler() {
    this.deactivatePopOver();
  }

  deactivatePopOver() {
    this.setState(() => ({
      popOver: {
        isActive: false
      },
      activatedItem: null,
      popOverPosition: null
    }));
  }

  render() {
    return (
      <div>
        <ToolBoxList
          items={this.state.items}
          activatedItem={this.state.activatedItem}
          itemOnClick={this.itemListOnClickHandler}
          popOverPosition={this.state.popOverPosition}
        />
        {this.state.popOver.isActive && (
          <ToolBoxPopOver
            top={this.state.popOver.topPx}
            bottom={this.state.popOver.bottomPx}
            left={this.state.popOver.leftPx}
            right={this.state.popOver.rightPx}
            modifierClasses={this.state.popOver.modifierClasses}
            description={this.state.popOver.description}
            comment={this.state.popOver.comment}
            onClick={this.popOverOnClickHandler}
          />
        )}
      </div>
    );
  }
}

export default ToolBoxListContainer;
