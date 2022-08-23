/*
============================================
; Title: Assignment 3.2 - Node's Module System
; Author: Chad ONeal
; Date:   08/22/2022
; Description: Class & Constructor
;===========================================
*/

//class & constructor for team name, mascot, and player count
class Team {
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

module.exports = Team;