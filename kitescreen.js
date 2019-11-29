let state = false;
let injected = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  !injected && chrome.tabs.insertCSS(null, { file: "kitescreen.css" });
  injected = true;
  if (!state) {
    chrome.browserAction.setIcon({path: "exit128.png"});
    // No tabs or host permissions needed!
    chrome.tabs.executeScript({
      file: "create.js",
      allFrames: true
    });
  } else {
    chrome.browserAction.setIcon({path: "icon128.png"});
    chrome.tabs.executeScript({
      file: "destroy.js",
      allFrames: true
    });
  }
  state = !state;
});
