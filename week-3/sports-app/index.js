/*
============================================
; Title: Assignment 3.2 - Node's Module System
; Author: Chad ONeal
; Date:   08/22/2022
; Description: Team names displayed to console
;===========================================
*/

//declaration of constant
const teamManager = require("./team-manager");

//array of team name, mascot, and player count
function displayTeams() {
    let arrayOfTeams = teamManager.findTeams();
    let teams = "-- DISPLAYING TEAMS --";
   arrayOfTeams.forEach(team => {
        teams += "\n";
        teams += "Name: " + team.name + "\n";
        teams += "Mascot: " + team.mascot + "\n";
        teams += "Player Count: " + team.playerCount;
        teams += "\n"
    });

    return teams;
}

//function to show championship game
function displayChampionshipGame() {
    // let randomTeam = Math.floor(Math.random() * 5);
    let teamOne = teamManager.findTeam("Tennessee");
    let teamTwo = teamManager.findTeam("Florida");
    let championshipGameString = "--CHAMPIONSHIP GAME --";
    championshipGameString += "\n";
    championshipGameString += teamManager.getGame(teamOne, teamTwo);
    return championshipGameString;

}

console.log(displayTeams(), "\n", displayChampionshipGame());