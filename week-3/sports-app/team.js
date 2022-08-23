/*
============================================
; Title: team.js
; Author: Chad ONeal
; Modified by: Chad ONeal
; Date:   08/22/2022
; Description: Sports app week-3
;===========================================
*/

//class constructor for team name, mascot, and player count
class Team {
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

module.exports = Team; 