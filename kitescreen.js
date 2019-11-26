chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
      code: `(async () => {
      var videoElement = document.getElementsByTagName("video")[0];
      try {
        if (videoElement !== document.pictureInPictureElement) {
          await videoElement.requestPictureInPicture();
        } else {
          await document.exitPictureInPicture();
        }
      }
      catch(error) {}
    })()`
    });
  });
  