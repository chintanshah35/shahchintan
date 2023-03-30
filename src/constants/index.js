import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  oraclecerner,
  collidedigital,
  bluewander,
  chatgptapp,
  ecomdashboard,
  topgithubrepos,
  threejs,
  smgconvonix,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend/UI Developer",
    icon: backend,
  },
  {
    title: "Web Accessibility Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer (Technical Contractor)",
    company_name: "Oracle Cerner",
    icon: oraclecerner,
    iconBg:"#FFFFFF",
    date: "April 2020 - March 2023",
    points: [
      "Developed reusable and web accessible UI components using React, JavaScript, ES6, Context API, Hooks, and styles using SASS and ensured they are ADA complaint.",
      "Involved in end-to-end development from design, development, test to deployment.",
      "Worked with UX teams to discuss implementation feasibility and create customizations for mobile screens to ensure accurate rendering.",
      "Implemented unit, integration and visual regression tests using Jest, Enzyme, WebDriver.io and RSpec.",
      "Undertook performance tracking, and analysis by automating several tracking metrics using Jenkins.",
      "Improved UX performance by multiple code optimizations, reducing API calls and improving caching.",
      "Participated in regular code reviews and PRs on crucible and Git.",
      "Handled continuous integration, testing and deployment with Git, Dockers, and Jenkins.",
      "Worked on backend engine with Ruby and handled integration with UI.",
      "Participated in technical discussions and provided regular feedback on ways to optimize performance and design.",
      "Performed Accessibility testing and implemented Keyboard Navigation testing for all workflows to ensure all workflows are keyboard accessible and meet accessibility requirements.",
      "Organized knowledge transfer and design discussions that lead to better overall code quality and lesser defects.",
      "Contributed new components to Terra library, Cerner’s open-source framework.",
      "Implemented authentications and authorization checks to manage and secure access to medical data.",
      "Created a documentation website for our project to manage all documentation, release information, onboarding info, contribution guidelines, design guidelines, first time guide, project info, testing strategy and standards.",
      "Collaborated and worked with teams across different time zones to handle testing and releases."
],
  },
  {
    title: "Software Engineer",
    company_name: "BNFAW Inc(dba Collide Digital)",
    icon: collidedigital,
    iconBg: "#FFFFFF",
    date: "June 2018 - Jan 2020",
    points: [
      "Developed UI for Internal Analytics and Ad Tracking tool using JavaScript (ES6), React, Redux, SASS and Node.js",
      "Created reusable React components and managed application state with Hooks, Redux.",
      "Used React useMemo for performance Optimization, React useReducer for the Http State.",
      "Implemented the Drag and Drop functionality using React-Draggable.",
      "Used High-Order Component to improve component reusability.",
      "Utilized APIs like Google Analytics API, Facebook Marketing API, and AdWords API to pull data and create data visualization using React-Fusion Charts.",
      "Implemented JSON Web Token based Authorization for various access.",
      "Displayed relevant KPIs from all sources in Tabular format using Griddle library.",
      "Used Node.js to run Grunt tasks and build properly the project (compile, minify, concat etc.).",
      "Worked on IP blocking module to stop ads from being displayed based on location IPs.",
      "Optimized Performance by minifying resources, implementing caching, reducing HTTP requests, enabling prefetching, and implementing image compression.",
      "Performed unit and integration testing of Components using Enzyme and Jest."
],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Bluewander",
    icon: bluewander,
    iconBg: "#FFFFFF",
    date: "August 2017 - May 2018",
    points: [
      "Developed single page applications using React Redux architecture, ES6, web pack and grunt.",
      "Created reusable UI components with JSX like Accordian, Tab and Modal for user profile and travel experience sections.",
      "Used flickity.js for creating carousel-images.",
      "Used Redux to manage state within React Application.",
      "Extensively used CSS preprocessors like SASS for re-usable style components.",
      "Implemented CSS Box Model and styled web pages using CSS preprocessor SASS and implemented Mixins, functions, custom grid systems.",
      "Applied optimization techniques to reduce page size and load times to enhance user experience using sprites.",
      "Implemented correct structure, colors, ARIA attributes, and designed forms for accessibility to make it accessible to people with disabilities.",
      "Handled accessibility testing with Level Access, aXe, ContrastChecker, VoiceOver, ChromeVox, and JAWS."
],
  },
  {
    title: "Software Engineer",
    company_name: "Starcom MediaVest Group Convonix",
    icon: smgconvonix,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Present",
    points: [
      "Worked on developing internal live chat applications using HTML5, CSS3, jQuery, PHP, and MySQL with the team.",
      "Collaborated with IT, marketing, and design team to develop Convonix flagship Brand Monitoring Solution for improved decision making and outcomes.",
      "Involved in complete SDLC from analyzing requirements, designing, development and testing.",
      "Developed internal applications for SEO and link tracking using HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, PHP MySQL, built on Laravel and followed a TDD approach.",
      "Handled Data Modelling and database design and development on MySQL.",
      "Developed a PHP web application to automate SEO Keyword Position checking on Google, thus reducing the time consumption by 81%."
],
  },
];

const projects = [
  {
    name: "Chat GPT Clone App",
    description:
      "Developed Chat GPT Clone Web App using OpenAI API, React JS, Node JS and Express. Added AI model filters and temperature control to handle randomness of a model.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs/express",
        color: "green-text-gradient",
      },
      {
        name: "openai-api",
        color: "pink-text-gradient",
      },
    ],
    image: chatgptapp,
    source_code_link: "https://github.com/chintanshah35/ChatGPTApp/",
  },
  {
    name: "Ecommerce Dashboard",
    description:
      "Online Ecommerce Dashboard Web Application using React, FusionCharts, Google Sheets & Boostrap. Generated visualization based on Month selection.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fusion-charts",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ecomdashboard,
    source_code_link: "https://github.com/chintanshah35/ReactEcommerceAnalyticsDashboard",
  },
  {
    name: "Top 100 GitHub Repos",
    description:
      "A responsive react project to fetch Top 100 Repositories from Github API based on star ratings. Repo page displays details and commit data for past 24 hours.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "github-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: topgithubrepos,
    source_code_link: "https://github.com/chintanshah35/TopGitRepositories",
  },
];

export { services, technologies, experiences, projects };
