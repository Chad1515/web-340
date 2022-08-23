/*
============================================
; Title:  Assignment 3.2 - Node's Module System
; Author: Chad ONeal
; Date:   08/22/2022
; Description: Team names and championship game information
;===========================================
*/

//declaration of constants
const Team = require("./team");
let moment = require('moment');


// function to find team
function findTeams() {
    let teams = [];
    teams.push(new Team("Tennessee", "Vols", "52"));
    teams.push(new Team("Florida", "Gators", "55"));
    teams.push(new Team("Auburn", "Tigers", "54"));
    teams.push(new Team("Vanderbilt", "Commodores", "51"));
    teams.push(new Team("Ole Miss", "Rebels", "50"));
    return teams;
}

//function to team names
function findTeam(name) {
    let teams = findTeams();
    let selectedTeam = teams.find(team => team.name == name);
    return selectedTeam;
}

//function to display teams playing in championship
function getGame(teamOne, teamTwo) {
    // date 7 days in the future from today
    let date = moment();
    let formattedDate = date.add(7, 'days').format('L').replace(/\//g, "-");
    let msg = `${teamOne.name} ${teamOne.mascot} are playing ${teamTwo.name} ${teamTwo.mascot}
    on ${formattedDate} at 7:00 PM EST.`;
    return msg;
}

module.exports = {findTeams, findTeam, getGame};
