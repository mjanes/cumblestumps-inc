$(document).ready(getUrl());

var url;

function getUrl() {
  chrome.tabs.query({'active' : true}, function(tabs) {
    storeUrl(tabs[0].url);
  });
}

function storeUrl(inUrl) {
  url = inUrl.split("?")[0];
  loadNoteForUrl(url);
  $('#notdbutton').click(function() {
    save(url, $('#notdtextarea').val());
  });
}

function loadNoteForUrl(url) {
  chrome.storage.sync.get(url, function (retVal) {
    // Create property if it does not exist yet
    if (typeof retVal[url] != 'string') {
      retVal[url] = '';
    }
    $('#notdtextarea').val(retVal[url]);
  });
}

function save(url, notes) {
  var pair = {};
  pair[url] = notes;

  chrome.storage.sync.set(pair, function() {
    if (chrome.extension.lastError) {
      alert('Ar error occurred: ' + chrome.extension.lastError.message);
    }
    // TODO: Close popup perhaps?  
  });
}
