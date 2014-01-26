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


$(document).ready(getUrl());

var url;

function getUrl() {
  chrome.tabs.query({'active' : true}, function(tabs) {
    saveUrl(tabs[0].url);
  });
}

function saveUrl(inUrl) {
  url = inUrl;
  var text = localStorage.getItr
}


function load(url) {
  return localStorage.getItem(url);
}


function save(url, notes) {
  localStorage.setItem(url, notes);
}
