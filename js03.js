/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */

//Day of the week
let weekDays = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
window.addEventListener("load",addWeekDays);
//Func to write weekday names into calender
function addWeekDays() {
    let i=0; //initial counter value
    //reference the collection of heading cells
    let headingCells = document.getElementsByTagName("th");
    //write each of the seven days into a heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];
        // increase counter by 1
        i++
    }
}
window.addEventListener("load", showGames);
//Function to write game info into the calender
function showGames(){
    for (let i=0; i < gameDates.length; i++) {
        let gameInfo = "";
        //open paragraph
        gameInfo +="<p>"
        //Include opponent
        gameInfo += gameOpponents[i]+"<br>";
        //Include the result and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - "+ runsAllowed[i]+ ")";
        //close paragraph
        gameInfo+= "</p>";
        //Write the info into a table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
    }
}
