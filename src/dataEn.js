const dataEn = {
    type: 'EN',
    
    ui: {
        projects: "Projects",
        skills: "Skills",
        mainSkills: "Main Skills",
        otherSkills: "Other Skills",
        contact: "Contact",
        email: "E-Mail",
        copyright: "All Rights Reserved",
    },

    dev: {
        name: "Noor Wachid",
        description: "C++ Programmer and Web Developer",
        email: 'noorwachid@yandex.com',

        mainSkills: [{
                name: "C++",
                description: "Create high-performance library, CLI and graphics based application",
            },
            {
                name: "JavaScript",
                description: "Make interactive web user interface",
            },
            {
                name: "PHP",
                description: "Make dynamic website",
            }
        ],

        otherSkills: [
            "HTML/CSS",
            "MySQL",
            "Using Git version control",
            "Using GNU/Linux based OS",
            "Speaking/Writing in Indonesian and English",
        ],
    },

    tags: ["All", "C++", "JavaScript", "PHP"],
    tagActive: "All",
    projects: [{
            id: 1,
            name: "RainType",
            description: "Very basic typing test written in JavaScript",
            url: "https://noorwachid.github.io/raintype",
            image: "raintype.png",
            tags: ["JavaScript"]
        },
        {
            id: 7,
            name: "LeleBr",
            description: "The best collection of fun on the internet",
            url: "https://lelebr.com",
            image: "lelebr.png",
            tags: ["PHP", "MySQL", "JavaScript"]
        },
        {
            id: 2,
            name: "WFileServer",
            description: "Complete rewrite simplified version of HFS",
            url: "https://github.com/noorwachid/wfileserver",
            image: "wfs.png",
            tags: ["JavaScript", "NodeJS"]
        },
        {
            id: 3,
            name: "FixQuote",
            description: "Equalize/Differentiate quotation marks",
            url: "https://noorwachid.github.io/jar/fixquote",
            image: "fixquote.png",
            tags: ["JavaScript"]
        },
        {
            id: 4,
            name: "Sprint",
            description: "Speed reader: Read article or anything faster than ever",
            url: "https://noorwachid.github.io/jar/sprint",
            image: "sprint.png",
            tags: ["JavaScript"]
        },
        {
            id: 5,
            name: "Anggur",
            description: "2D C++ Rendering Library",
            url: "https://github.com/noorwachid/anggur",
            image: "anggur.png",
            tags: ["C++"]
        },
        {
            id: 6,
            name: "SimpleBlog",
            description: "Super simple blog written in PHP with MySQL",
            url: "https://github.com/noorwachid/simpleblog",
            image: "simpleblog.png",
            tags: ["PHP", "MySQL"]
        }
    ]
};
