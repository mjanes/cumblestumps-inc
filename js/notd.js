$(document).ready(getUrl());

var url;

function getUrl() {
  chrome.tabs.query({'active' : true}, function(tabs) {
    storeUrl(tabs[0].url);
  });
}

function storeUrl(inUrl) {
  url = inUrl;
  $('#notdtextarea').val(load(url));
  $('#notdbutton').click(function() {
    save(url, $('#notdtextarea').val());
  });
}

function load(url) {
  return localStorage.getItem(url);
}

function save(url, notes) {
  localStorage.setItem(url, notes);
}
