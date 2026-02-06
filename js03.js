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
window.addEventListener("load",addWeekdays);
//Func to write weekday names into calender
function addWeekdays() {
    let i=0; //initial counter value
    //reference the collection of heading cells
    let headngCells = document.getElementsByTagName("th");
    //write each of the seven days into a heading cell
    while (i<7){
        headingCells[i].innerHTML = weekDays[i];
        // increase counter by 1
        i++
    }
}