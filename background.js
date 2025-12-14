const hasVideoTags = new chrome.declarativeContent.PageStateMatcher({
  css: ["video"]
});

// Setup rules on installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [hasVideoTags],
      actions: [new chrome.declarativeContent.ShowAction()]
    }]);
  });
});

// State management helpers
const getTabState = async (tabId) => {
  const key = `tab_${tabId}`;
  const result = await chrome.storage.session.get(key);
  return result[key] || { injected: false, active: false };
};

const setTabState = async (tabId, state) => {
  const key = `tab_${tabId}`;
  await chrome.storage.session.set({ [key]: state });
};

// Main interaction handler
chrome.action.onClicked.addListener(async (tab) => {
  const state = await getTabState(tab.id);

  if (!state.injected) {
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["kitescreen.css"]
    });
    state.injected = true;
  }

  if (!state.active) {
    // Set icon to exit
    await chrome.action.setIcon({
      tabId: tab.id,
      path: "images/exit128.png"
    });
    // Execute create.js
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["create.js"]
    });
    state.active = true;
  } else {
    // Set icon to default
    await chrome.action.setIcon({
      tabId: tab.id,
      path: "images/icon128.png"
    });
    // Execute destroy.js
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["destroy.js"]
    });
    state.active = false;
  }

  await setTabState(tab.id, state);
});

// Clean up state when tab is closed
chrome.tabs.onRemoved.addListener(async (tabId) => {
  await chrome.storage.session.remove(`tab_${tabId}`);
});
