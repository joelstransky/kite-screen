const ACTIVE = "ACTIVE";
const INJECTED = "INJECTED";
const QUERY_VIDEO = "QUERY_VIDEO";

const hasVideoTags = new chrome.declarativeContent.PageStateMatcher({
  css: ["video"]
});

// when to show color "page action" icon
const rules = [
  {
    conditions: [hasVideoTags],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }
];
const callback = (details) => {};

chrome.runtime.onInstalled.addListener(
    () => chrome.declarativeContent.onPageChanged.removeRules(undefined, 
        () => chrome.declarativeContent.onPageChanged.addRules(rules, callback)
    )
)

const store = {};
const getState = (type, key) => {
   store[key] = store[key] || {}
   return store[key][type];
}
const setState = (type, data, key) => {
    store[key] = {...(store[key] || {}), [type]: data}
}


chrome.pageAction.onClicked.addListener((tab) => {
    !getState(INJECTED, tab.id) && chrome.tabs.insertCSS(null, { file: "kitescreen.css" });
    setState(INJECTED, true, tab.id);

    if (!getState(ACTIVE, tab.id)) {
      chrome.pageAction.setIcon({tabId: tab.id, path: "images/exit128.png"});
      chrome.tabs.executeScript({
        file: "create.js",
        allFrames: true
      });
    } else {
      chrome.pageAction.setIcon({tabId: tab.id, path: "images/icon128.png"});
      chrome.tabs.executeScript({
        file: "destroy.js",
        allFrames: true
      });
    }
    setState(ACTIVE, !getState(ACTIVE, tab.id), tab.id)
});

