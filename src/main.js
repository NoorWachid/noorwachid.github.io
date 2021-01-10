const data = {
    projects: [
        {
            id: 1,
            name: "RainType",
            description: "Very basic typing test written in JavaScript.",
            tags: ["JavaScript"]
        },
        {
            id: 2,
            name: "WFileServer",
            description: "Complete rewrite simplified version of HFS.",
            tags: ["JavaScript"]
        },
        {
            id: 3,
            name: "FixQuote",
            description: "Equalize/Differentiate quotation marks.",
            url: "https://noorwachid.github.io/Jar/FixQuote",
            tags: ["JavaScript"]
        },
        {
            id: 4,
            name: "Sprint",
            description: "Speed reader: Read article or anything faster than ever.",
            url: "https://noorwachid.github.io/Jar/Sprint",
            tags: ["JavaScript"]
        },
        {
            id: 5,
            name: "AnggurEngine",
            description: "Another 2D C++ Game Engine.",
            url: "https://github.com/NoorWachid/Anggur",
            tags: ["C++"]
        },
        {
            id: 5,
            name: "SimpleBlog",
            description: "Super simple blog written in PHP with MySQL.",
            url: "https://github.com/NoorWachid/SimpleBlog",
            tags: ["PHP"]
        }
    ]
};

$(document).ready(function() {
    $("#current-year").text(new Date().getFullYear());
});