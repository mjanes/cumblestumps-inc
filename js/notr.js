/**
 * Ok, so, I've never really written that much javascript, about time I learned it.
 *
 * So, I'm not sure if I should put all or most functionality this file, or leave it in the html page
 * that I'm writing.
 *
 * But, functions that I will need:
 *
 * // Return whatever notes have been taken for the given url
 * function String load(String url)
 *
 * // Save notes to persistent storage, with url as key
 * function void save(String url, String notes)
 *
 * Then I just need triggers to call load on the popup.html opening, and save when the save button is 
 * hit.
 */

//var notedURL = document.URL.split("?")[0];
var notedURL = '';

/*
var isThereANote = localStorage.getItem(notedURL);
if (!isThereANote) {isThereANote='';}
alert(notedURL + "final");
*/

/*
$( document ).ready(function() {
alert('test');
var notedURL = document.URL.split("?")[0];
var isThereANote = localStorage.getItem(notedURL);
if (!isThereANote) {isThereANote='';}
//$('body').prepend('<div><form><textarea id="notesForThisURL">' + isThereANote + '</textarea></form></div><button id="saveNote">Click to save!</button>');
});
*/
function load(url) {


}


function save(url, notes) {


}
