const data = {
    tags: ["All", "C++", "JavaScript", "PHP"],
    tagActive: "All",
    projects: [{
            id: 1,
            name: "RainType",
            description: "Very basic typing test written in JavaScript.",
            url: "https://noorwachid.github.io/RainType",
            image: "raintype.png",
            tags: ["JavaScript"]
        },
        {
            id: 2,
            name: "WFileServer",
            description: "Complete rewrite simplified version of HFS.",
            url: "https://github.com/NoorWachid/WFileServer",
            image: "wfs.png",
            tags: ["JavaScript", "NodeJS"]
        },
        {
            id: 3,
            name: "FixQuote",
            description: "Equalize/Differentiate quotation marks.",
            url: "https://noorwachid.github.io/Jar/FixQuote",
            image: "fixquote.png",
            tags: ["JavaScript"]
        },
        {
            id: 4,
            name: "Sprint",
            description: "Speed reader: Read article or anything faster than ever.",
            url: "https://noorwachid.github.io/Jar/Sprint",
            image: "sprint.png",
            tags: ["JavaScript"]
        },
        {
            id: 5,
            name: "AnggurEngine",
            description: "Another 2D C++ Game Engine.",
            url: "https://github.com/NoorWachid/Anggur",
            image: "anggur.png",
            tags: ["C++"]
        },
        {
            id: 5,
            name: "SimpleBlog",
            description: "Super simple blog written in PHP with MySQL.",
            url: "https://github.com/NoorWachid/SimpleBlog",
            image: "blank.png",
            tags: ["PHP", "MySQL"]
        }
    ]
};

function createProjectNodeTag(id, name) {
    return `<span id="${id}" class="item mx-1 px-3 py-2 border">${name}</span>`;
}

function createProjectNode(it) {
    return `
        <a class="project d-block" href="${it.url}">
            <img class="d-block mb-3 w-100" src="assets/${it.image}" alt="${it.name}">
            <div>
                <h4>${it.name}</h4>
                <div class="text-secondary mb-1">${it.description}</div>
                <div class="text-primary">${it.tags.join(", ")}</div>
            </div>
        </a>
    `
}

function initProjectTagList() {
    const container = $("#tags");
    for (let i = 0; i < data.tags.length; ++i) {
        const id = `tag-${i}`;
        container.append(createProjectNodeTag(id, data.tags[i]));
        $(`#${id}`).click(function() {
            data.tagActive = data.tags[i];
            updateProjectTagList();
            updateProjectList();
        });
    }
}

function updateProjectTagList() { 

    for (let i = 0; i < data.tags.length; ++i) {
        const element = $(`#tag-${i}`);
        if (data.tags[i] == data.tagActive) {
            element.addClass('active');
        } else {
            element.removeClass('active');
        }
    }
}

function updateProjectList() {
    let projects = [];

    if (data.tagActive === "All") {
        projects = data.projects;
    } else {
        projects = data.projects.filter(function (item) {
            for (let i = 0; i < item.tags.length; ++i) {
                if (item.tags[i] === data.tagActive) {
                    return true;
                }
            }
            return false;
        });
    }

    const projectCols = [
        $('<div class="col-md-4">'),
        $('<div class="col-md-4">'),
        $('<div class="col-md-4">'),
    ];
    
    $("#list").text("");
    $("#list").append(projectCols[0]);
    $("#list").append(projectCols[1]);
    $("#list").append(projectCols[2]);

    for (let i = 0; i < projects.length; ++i) {
        projectCols[i % 3].append(createProjectNode(projects[i]));
    }
}

$(document).ready(function () {
    $("#current-year").text(new Date().getFullYear());


    initSmoothScroll();
    initProjectTagList();
    updateProjectTagList();
    updateProjectList();
});