let state = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (!state) {
    chrome.tabs.insertCSS(null, { file: "kitescreen.css" });
    // No tabs or host permissions needed!
    console.log("Turning " + tab.url + " red!");
    chrome.tabs.executeScript({
      file: "extension.js",
      allFrames: true
    });
  } else {
    var videoElement = document.getElementsByTagName("video")[0];
    // try {
    //   if (videoElement !== document.pictureInPictureElement) {
    //     await videoElement.requestPictureInPicture();
    //   } else {
    //     await document.exitPictureInPicture();
    //   }
    // } catch (error) {}
  }
  state = !state;
});
