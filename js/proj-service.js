'use strict';


var gProjs;


function generateProjs() {
    gProjs = [{
            por: 0,
            id: "minesleeper",
            name: "Mine Sleeper",
            title: "Find all mines and win!",
            desc: "Coding this game was my first sprint in the Coding Academy course, it was an enriching and challenging experience, in this game your goal is to mark all the mine squares with a flag then you win. ",
            url: "https://yonatanmiz963.github.io/Sprint-1/",
            publishedAt: 1611439200000,
            labels: "Matrixes",
        },
        {
            por: 1,
            id: "bookshop",
            name: "Book Shop",
            title: "a bookshop data storage",
            desc: "In this project I had learn about the MVC and CRUDL concepts which stand for dividing the roles of each file, the view, the controller and the model. ",
            url: "https://yonatanmiz963.github.io/book-shop/",
            publishedAt: 1611784800000,
            labels: "MVC, CRUDL"
        },
        {
            por: 2,
            id: "guesswho",
            name: "Guess Who",
            title: "A Smart Jinny",
            desc: "In this project we have created a bot using binary trees and gets more knowledge each time you tell him new things, he guesses who you think of eventually. ",
            url: "https://yonatanmiz963.github.io/Guess-Who/",
            publishedAt: 1612044000000,
            labels: "Binary Trees"
        },
        {
            por: 3,
            id: "pacman",
            name: "Pacman",
            title: "The first video game",
            desc: "During this project we have created the legendary Pacman game, learning alot about logic, and the concept of update model and then rendering to DOM. ",
            url: "https://yonatanmiz963.github.io/Pacman/",
            publishedAt: 1611007200000,
            labels: "Matrixes"
        },
        {
            por: 4,
            id: "ballboard",
            name: "Ball-Board",
            title: "Get all the balls!",
            desc: "In this project I have learnt alot about logic, matrixes as models and rendering to DOM. ",
            url: "https://yonatanmiz963.github.io/Ball-Board/",
            publishedAt: 1610834400000,
            labels: "Materixes"
        },
        {
            por: 5,
            id: "todo",
            name: "To-Do",
            title: "A useful to do list",
            desc: "In this project I learnt how to use the MVC concept, also using array extras. ",
            url: "https://yonatanmiz963.github.io/To-do-list/",
            publishedAt: 1611698400000,
            labels: "MVC"
        }
    ]
}

function getProjects() {
    return gProjs;
}

function getProjectById(id) {
    var project = gProjs.find(function(proj) {
        return proj.id === id;
    })
    return project;
}