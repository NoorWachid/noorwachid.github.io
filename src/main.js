const data = {
    projects: [{
            id: 1,
            name: "RainType",
            description: "Very basic typing test written in JavaScript.",
            tags: ["JavaScript"]
        },
        {
            id: 2,
            name: "WFileServer",
            description: "Complete rewrite simplified version of HFS.",
            tags: ["JavaScript", "NodeJS"]
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
            tags: ["PHP", "MySQL"]
        }
    ]
};

const projectCols = [
    $('<div class="col-md-4 text-center">'),
    $('<div class="col-md-4 text-center">'),
    $('<div class="col-md-4 text-center">'),
];
const projectTpl = (it) => `
    <a class="project d-block" href="${it.url}">
        <img class="d-block mb-3"
            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
            alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176ebdea450%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176ebdea450%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.68333435058594%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true">
        <div>
            <h4>${it.name}</h4>
            <p>${it.description}</p>
            <div>${it.tags.join(", ")}</div>
        </div>
    </a>
`;

$(document).ready(function () {
    $("#current-year").text(new Date().getFullYear());

    $("#list").append(projectCols[0]);
    $("#list").append(projectCols[1]);
    $("#list").append(projectCols[2]);

    for (let i = 0; i < data.projects.length; ++i) {
        projectCols[i % 3].append(
            projectTpl(data.projects[i])
        );
    }

    initSmoothScroll();
});