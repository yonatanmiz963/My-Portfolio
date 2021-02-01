'use strict';

var gProjs;

$('.portfolio-hover').on('click', function() {
    renderModal(this);
});



$(document).ready(function initPage() {
    console.log('Starting up');
    gProjs = generateProjs();
    renderProjects();

    // console.log('proj 0 por:', gProjs[0].por);
    // new Date(stamp).toDateString()
});

function renderProjects() {
    gProjs.forEach(function(proj) {
        renderPortfolio(proj);
    })
}



function renderPortfolio(proj) {
    var $portfolio = $(`.por-${proj.por}`);
    $portfolio.find('h4').text(`${proj.name}`);
    $portfolio.find('p').text(`${proj.labels}`);
    // console.log($portfolio);
}


function renderModal(elPortfolio) {
    console.log(elPortfolio);
    var $elPortfolio = $(elPortfolio);
    // console.log($elPortfolio);
    var id = $elPortfolio.attr("data-id");
    // console.log(id);
    var currProj = gProjs[id];
    var $modal = $('.modal');
    $modal.find('h2').text(currProj.name);
    $modal.find('.item-intro').text(currProj.title);
    $modal.find('.desc').text(currProj.desc);
    $modal.find('.date').text(`Created at: ${new Date(currProj.publishedAt).toDateString()}`);
    $modal.find('.label').text(`Category: ${currProj.labels}`);
    $modal.find('.link').click(function() {
        window.open(`${currProj.url}`);
    });
}