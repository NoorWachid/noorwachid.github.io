let data = dataEn;


function createProjectNodeTag(id, name) {
    return `<span id="${id}" class="item mx-1 px-3 py-2 border">${name}</span>`;
}

function createProjectNode(it) {
    return `
        <a class="project d-block" href="${it.url}">
            <div class="z-overlay">
                <img class="z-overlay-image d-block mb-3 w-100" src="assets/${it.image}" alt="${it.name}">
                <div class="z-overlay-color"></div>
            </div>
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
        $(`#${id}`).click(function () {
            data.tagActive = data.tags[i];
            updateProjectTagList();
            updateProjectList();
        });
    
    }

    updateProjectTagList();
    updateProjectList();
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

function initUiLanguage() {

    const langEn = $("#lang-en");
    const langId = $("#lang-id");
    function useLangEn() {
        langEn.addClass("font-weight-bold");
        langId.removeClass("font-weight-bold");
        data = dataEn;
        updateUiLanguage();
    }
    function useLangId() {
        langId.addClass("font-weight-bold");
        langEn.removeClass("font-weight-bold");
        data = dataId;
        updateUiLanguage();
    }
    
    useLangEn();
    if (localStorage.hasOwnProperty("lang")) {
        if (localStorage.getItem("lang") === "id") {
            data = dataId;
            useLangId();
        }
    }

    langEn.click(useLangEn);
    langId.click(useLangId);

    updateUiLanguage();
}

function updateUiLanguage() {
    $("#dev-name").text(data.dev.name);
    $("#dev-description").text(data.dev.description);
    $("#dev-email").text(data.dev.email);
    $("#dev-phone").text(data.dev.phone);
    $("#ui-projects-h").text(data.ui.projects);
    $("#ui-projects").text(data.ui.projects);
    $("#ui-skills-h").text(data.ui.skills);
    $("#ui-skills").text(data.ui.skills);
    $("#ui-main-skills").text(data.ui.mainSkills);
    $("#ui-other-skills").text(data.ui.otherSkills);
    $("#ui-contact").text(data.ui.contact);
    $("#ui-contact-h").text(data.ui.contact);
    $("#ui-email").text(data.ui.email);
    $("#ui-phone").text(data.ui.phone);
    $("#ui-copyright").text(data.ui.copyright);

    let mainSkillHtml = '';
    for (let i = 0; i < data.dev.mainSkills.length; ++i) {
        const skill = data.dev.mainSkills[i];
        mainSkillHtml += `<div>
            <h5 class="mb-0">${skill.name}</h5>
            <p class="text-secondary">${skill.description}</p>
        </div>`;
    }
    $("#dev-main-skills").html(mainSkillHtml);

    let otherSkillHtml = '';
    for (let i = 0; i < data.dev.otherSkills.length; ++i) {
        const skill = data.dev.otherSkills[i];
        otherSkillHtml += `<p>${skill}</p>`;
    }
    $("#dev-other-skills").html(otherSkillHtml);
}

$(document).ready(function () {
    $("#current-year").text(new Date().getFullYear());

    initUiLanguage();
    initSmoothScroll();
    initProjectTagList();
});