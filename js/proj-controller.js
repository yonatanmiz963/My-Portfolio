'use strict';





$(function initPage() {
    generateProjs();
    var projects = getProjects();
    renderPortfolios(projects);
});


function renderPortfolios(projects) {

    var portfoliosHTML = projects.map(function(proj) {

        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover" onclick="onRenderModal('${proj.id}')">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.labels}</p>
        </div>
        </div>`
    }).join('');

    document.querySelector('#render-in').innerHTML = portfoliosHTML;
}


function onRenderModal(id) {
    var project = getProject(id);
    // console.log(project);

    var $modal = $('.modal');

    $modal.find('.img-fluid').attr("src", `img/portfolios/${project.id}.png`);

    $modal.find('h2').text(project.name);
    $modal.find('.item-intro').text(project.title);
    $modal.find('.desc').text(project.desc);
    $modal.find('.date').text(`Created at: ${new Date(project.publishedAt).toDateString()}`);
    $modal.find('.label').text(`Category: ${project.labels}`);
    $modal.find('.link').click(function() {
        window.open(`${project.url}`);
    });
}

function getProject(id) {
    return getProjectById(id);
}


function sendEmail() {
    var subject = $('input[name=subject]').val()
    var body = $('textarea[name=body]').val().replace(/\n/g, `%0d%0a`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=yonatanmiz963@gmail.com&su=${subject}&body=${body}`)
}