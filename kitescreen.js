let state = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (!state) {
    chrome.tabs.insertCSS(null, { file: "kitescreen.css" });
    // No tabs or host permissions needed!
    chrome.tabs.executeScript({
      file: "create.js",
      allFrames: true
    });
  } else {
    chrome.tabs.executeScript({
      file: "destroy.js",
      allFrames: true
    });
  }
  state = !state;
});
