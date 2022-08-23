/*
============================================
; Title: Assignment 3.2 - Node's Module System
; Author: Chad ONeal
; Date:   08/22/2022
; Description: Functions for team data
;===========================================
*/

//declaration of constant
const Team = require("./team");
let moment = require('moment');

//function to find team
function findTeams() {
    let teams = [];
    teams.push(new Team("Tennessee", "Vols", "51"));
    teams.push(new Team("Florida", "Gators", "52"));
    teams.push(new Team("Ole Miss", "Rebels", "53"));
    teams.push(new Team("Vanderbilt", "Commodores", "54"));
    teams.push(new Team("Auburn", "Tigers", "50"));
    return teams;
}

//function to find team name
function findTeam(name) {
    let teams = findTeams();
    let selectedTeam = teams.find(team => team.name == name);
    return selectedTeam;
}

//function to show championship game and when it is played
function getGame(teamOne, teamTwo) {
    // date 7 days in the future from today
    let date = moment();
    let formattedDate = date.add(7, 'days').format('L').replace(/\//g, "-");
    let msg = `${teamOne.name} ${teamOne.mascot} are playing ${teamTwo.name} ${teamTwo.mascot}
    on ${formattedDate} at 7:00 PM EST.`;
    return msg;
}

module.exports = {findTeams, findTeam, getGame};