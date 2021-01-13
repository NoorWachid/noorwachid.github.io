const dataEn = {
    type: 'EN',
    
    ui: {
        cv: "CV",
        cvUrl: "cv.svg",
        projects: "Projects",
        skills: "Skills",
        mainSkills: "Main Skills",
        otherSkills: "Other Skills",
        contact: "Contact",
        email: "E-Mail",
        phone: "Phone",
        copyright: "All Rights Reserved",
    },

    dev: {
        name: "Noor Wachid",
        description: "C++ Programmer and Web Developer",
        phone: '+62895383900152',
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
            url: "https://noorwachid.github.io/RainType",
            image: "raintype.png",
            tags: ["JavaScript"]
        },
        {
            id: 2,
            name: "WFileServer",
            description: "Complete rewrite simplified version of HFS",
            url: "https://github.com/NoorWachid/WFileServer",
            image: "wfs.png",
            tags: ["JavaScript", "NodeJS"]
        },
        {
            id: 3,
            name: "FixQuote",
            description: "Equalize/Differentiate quotation marks",
            url: "https://noorwachid.github.io/Jar/FixQuote",
            image: "fixquote.png",
            tags: ["JavaScript"]
        },
        {
            id: 4,
            name: "Sprint",
            description: "Speed reader: Read article or anything faster than ever",
            url: "https://noorwachid.github.io/Jar/Sprint",
            image: "sprint.png",
            tags: ["JavaScript"]
        },
        {
            id: 5,
            name: "AnggurEngine",
            description: "Another 2D C++ Game Engine",
            url: "https://github.com/NoorWachid/Anggur",
            image: "anggur.png",
            tags: ["C++"]
        },
        {
            id: 5,
            name: "SimpleBlog",
            description: "Super simple blog written in PHP with MySQL",
            url: "https://github.com/NoorWachid/SimpleBlog",
            image: "blank.png",
            tags: ["PHP", "MySQL"]
        }
    ]
};
