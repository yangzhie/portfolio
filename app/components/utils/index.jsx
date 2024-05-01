const technologies = [
    {
        name: "HTML 5",
        icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/html5-3-502526.png",
    },
    {
        name: "CSS 3",
        icon: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png",
    },
    {
        name: "JavaScript",
        icon: "https://static-00.iconduck.com/assets.00/js-icon-2048x2048-kbwt89q3.png",
    },
    {
        name: "React JS",
        icon: "https://cdn-icons-png.freepik.com/256/3334/3334886.png",
    },
    {
        name: "Tailwind CSS",
        icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
    {
        name: "Framer Motion",
        icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    },
    {
        name: "Express",
        icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
    },
    {
        name: "Node JS",
        icon: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
    },
    {
        name: "PostgreSQL",
        icon: "https://static-00.iconduck.com/assets.00/postgresql-icon-1987x2048-v2fkmdaw.png",
    },
    {
        name: "MongoDB",
        icon: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    {
        name: "Three JS",
        icon: "https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png",
    },
    {
        name: "Git",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
    },
    {
        name: "Figma",
        icon: "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
    },
    {
        name: "EJS",
        icon: "https://static-00.iconduck.com/assets.00/ejs-icon-512x275-qg030i6v.png"
    },
    {
        name: "Google Maps API",
        icon: "https://i.pinimg.com/originals/81/dd/73/81dd732f9aa041d4d97c2575f598ffb5.png"
    },
    {
        name: "Next JS",
        icon: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png"
    },
    {
        name: "Chart JS",
        icon: "https://seeklogo.com/images/C/chart-js-logo-BB0E7C3308-seeklogo.com.png"
    },
    {
        name: "Typescript",
        icon: "https://seekvectors.com/files/download/Typescript-01.png"
    }
]

const projects = [
    {
        projectLink: "https://github.com/yangzhie/portfolio",
        liveSiteLink: "google.com",
        projectImageLink: "/project-images/portfolio.PNG",
        title: "Portfolio",
        description:
            "A web showcase driven by React and Javascript. Featuring a starry landing page, web/app services, and projects with TailwindCSS. Immerse in 3D, toggle dark mode, and connect seamlessly. A fusion of tech and creativity. I expanded my expertise in UX/UI, responsive design, and API-driven headless CMS while crafting this project.",
        techIcons: ["HTML 5", "JavaScript", "React JS", "Next JS", "MongoDB", "Tailwind CSS", "Framer Motion"]
    },
    {
        projectLink: "https://github.com/yangzhie/under-crypto",
        liveSiteLink: "google.com",
        projectImageLink: "/project-images/under.PNG",
        title: "UnderCrypto",
        description:
            "UnderCrypto is a cryptocurrency exchange with a user-friendly GUI. It is an SPA built using ReactJS + Vite. Using multiple APIs to fetch cryptocurrency data, it displays various statistics of any cryptocurrency. It has a functional homepage, coin page (which displays the statistics about the coin along with news) and a watchlist page, where you can view what coins you have added to be tracked.",
        techIcons: ["HTML 5", "CSS 3", "JavaScript", "React JS", "Node JS", "Framer Motion", "Chart JS"]
    },
    {
        projectLink: "https://github.com/yangzhie/pipeline",
        liveSiteLink: "google.com",
        projectImageLink: "/project-images/pipeline.PNG",
        title: "Servo App",
        description:
            "The Servo App, a collaborative project by a team of five, focuses on creating an intuitive Single Page Application (SPA) for locating petrol stations via geographical coordinates. It utilizes JavaScript, Node.js, Express, Postgres, and RESTful APIs to offer users a comprehensive experience, pinpointing fuel stations and providing insights into fuel pricing and station statistics.",
        techIcons: ["HTML 5", "CSS 3", "JavaScript", "Express", "Node JS", "PostgreSQL", "Google Maps API"]
    },
    {
        projectLink: "https://github.com/yangzhie/alabaster-alt",
        liveSiteLink: "google.com",
        projectImageLink: "/project-images/alabaster.png",
        title: "Alabaster",
        description:
            "This application is an alternative site to alabaster.industries. It is a multi-page CRUD app made using Express and NodeJS. It is styled different to the original website but has added features for the administrators to post/edit and delete products. It also has a sign-up feature for new users to view the site. The site was designed in a way that it would be a permium, invite-only site, thus the site's layout and design.",
        techIcons: ["HTML 5", "CSS 3", "JavaScript", "Express", "Node JS", "PostgreSQL", "EJS"]
    },
    {
        projectLink: "https://github.com/yangzhie/tictactoe",
        liveSiteLink: "google.com",
        projectImageLink: "/project-images/tictactoe.png",
        title: "Tic Tac Toe",
        description:
            "This project presents a contemporary take on the classic 'Tic-Tac-Toe' game. Crafted with HTML, CSS, and JavaScript, it seamlessly combines modern gaming experience with the enduring appeal of the original. It's easy to play: select a cell, take turns marking 'X' or 'O,' and aim to achieve a row of three. Enjoy this blend of nostalgia and modern gaming convenience.",
        techIcons: ["HTML 5", "CSS 3", "JavaScript"]
    },
    {
        projectLink: "https://github.com/yangzhie/in-sync",
        liveSiteLink: "google.com",
        projectImageLink: "https://thectoclub.com/wp-content/uploads/sites/13/2023/08/codeanywhere.png-1-1024x627.jpg",
        title: "In-Sync",
        description:
            "Coding Collaborator.",
        techIcons: ["HTML 5", "Typescript", "React JS", "Next JS", "Express", "MongoDB", "Tailwind CSS"]
    },
]

export { technologies, projects }