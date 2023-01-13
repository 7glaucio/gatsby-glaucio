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
          description: `At the present time, <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> is hotter than ever. Being an extremely versatile language for the web.`,
          comment: `I have a lot of practice with JS on a daily basis since 2016 through frameworks (<b>Angular e React</b>). Lately, I've been studying an open-source framework called <b>Geonode</b>.`          
        },
        {
          id: 2,
          label: "Angular",
          description: `<b>Angular</b> is an open-source JavaScript application development framework maintained by Google, which allows for the creation of complex web applications in a organized and scalable way.`,
          comment: `Recently, I developed the Front End of an application focused on the management, control and inspection of contracts for the assignment of Federal Government properties.`
        },
        {
          id: 30,
          label: "React",
          description: `<b>React</b> is an open-source JavaScript library for building user interfaces, maintained by Facebook, which allows for the creation of reusable UI components and efficient updates of the view.`,
          comment: `Currently allocated at the Technical-Scientific Directorate of the Federal Police to contribute to the Front-End (ReactJS and Django) of the Inteligeo software, designed by criminal experts to assist the forensic work. The system provides centralized infrastructure for storing, presenting and analyzing spatial data. I joined the squad in its final phase of version 5 Beta release, contributing with specific adjustments and increments. Currently working on building new features.`
        },
        {
          id: 32,
          label: "Geonode",
          description: `<b>GeoNode</b> is an open-source platform for the management and dissemination of geospatial data, allowing for the creation, sharing and collaboration of maps and GIS data.`,
          comment: ``
        },
        {
          id: 3,
          label: "HTML5",
          description: `This is the markup language used to structure and present content on the internet.. 
             `,
          comment: `There's no web without <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">HTML</a>`
        },
        {
          id: 4,
          label: "CSS3",
          description: `<a href="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS</a> adds style to your HTML document, making it more visually beautiful.`,
          comment: `CSS makes web more presentable!`
        },
        {
          id: 21,
          label: "Bootstrap",
          description: `Open source web technology created by Twitter back in the 2010s, aiming for a better experience on mobile devices. `,
          comment: `<a href="https://en.wikipedia.org/wiki/Bootstrap" target="_blank">Bootstrap</a> is mobile's best friend!`
        },
        {
          id: 6,
          label: "Git",
          description: `Git is a <a href="https://en.wikipedia.org/wiki/Git" target="_blank">version control system</a> used to keep track of updates and changes to files in an organized way.`,
          comment: `There is no teamwork without Git!`
        },
        {
          id: 42,
          label: "Scrum",
          description: `Agile framework for managing projects, characterized by iterative, incremental delivery, and self-organizing cross-functional teams, with regular inspections and adaptations.`,
          comment: `There is no agile delivery without Scrum!`
        },
        {
          id: 43,
          label: "Django",
          description: `Open-source web framework for building full-featured web applications using the <b>Model-View-Controller (MVC)</b> architectural pattern, providing a high-level, reusable set of components for handling common web development tasks.`,
          comment: `I'm not advanced in Python, but I know enough to to work with Django.`
        },
        {
          id: 7,
          label: "PHP",
          description:`Language for creating behind-the-scenes, server-side applications.`,
          comment: `My experience with PHP is working for several years with WordPress.`
        },
        {
          id: 20,
          label: "MySQL",
          description: `<a href="https://pt.wikipedia.org/wiki/MySQL" target="_blank">SQL</a> database management system, one of the most used in the world.`,
          comment: `I have years of MySQL experience working with WordPress themes and plugins.`
        },
        {
          id: 15,
          label: "WordPress",
          description: `Open-source content management system widely used for different purposes. Used on millions of websites.`,
          comment: `I've created countless websites using the CMS, like 
            <a href="http://bemviverodonto.com.br/" target="_blank">this one</a> and
            <a href="https://easassessoria.com.br/" target="_blank">this other one too.</a>.`
        },
        {
        id: 16,
        label: 'Social Media',
        description: `Many companies and self-employed professionals choose social media managers to take care of their profiles..`,
        comment: `Since 2016 I have been serving companies, for which I manage <a href="http://facebook.com.br/focanainternet" target="_blank">Facebook</a> and <a href="http://instagram.com/focanainternet" target="_blank">Instagram</a>.`
        },
        {
        id: 17,
        label: 'Adobe Photoshop',
        description: `My gateway to IT world was Web Design, therefore I always made good use of my image editing experience on my website projects..`,
        comment: `In addition to Photoshop, I have experience using <a href="https://pt.wikipedia.org/wiki/Adobe_Fireworks" target="_blank">Adobe Fireworks</a> as well.`
        },
        {
          id: 76,
          label: 'English',
          description: `Proficiency in a second language has become a must these days, especially English which is spoken worldwide.`,
          comment: `I lived for 3 and a half years in <a href="https://pt.wikipedia.org/wiki/Boston" target="_blank">Greater Boston</a> area, thus <i>chill out and trust me</i>.`
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
