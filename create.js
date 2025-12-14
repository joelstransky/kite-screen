(async () => {
  const evaluateElement = async (target, videos) => {
    for (let item of videos) {
      if (item.src === target.dataset.videoid){
        try {
          if (item !== document.pictureInPictureElement) {
            target.classList.add('jpsks__reel-in');
            await item.requestPictureInPicture();
          } else {
            target.classList.remove('jpsks__reel-in');
            await document.exitPictureInPicture();
          }
        } catch (error) {}
      } else {
        item.parentElement.getElementsByClassName('jpsks__kite-screen')[0]
          .classList.remove('jpsks__reel-in');
      }
    }
  }
  // Set background images for icons (only once)
  if (!document.getElementById('jpsks-icon-styles')) {
    const iconUrl = chrome.runtime.getURL("images/icon48.png");
    const exitIconUrl = chrome.runtime.getURL("images/exit48.png");
    const style = document.createElement("style");
    style.id = 'jpsks-icon-styles';
    style.textContent = `
      .jpsks__b64-icon:before {
        background-image: url("${iconUrl}");
      }
      .jpsks__b64-icon.jpsks__reel-in:before {
        background-image: url("${exitIconUrl}");
      }
    `;
    document.head.appendChild(style);
  }
  
  // https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid
  const videos = document.getElementsByTagName("video");
  for (let item of videos) {
    // Ensure parent is positioned for absolute overlay
    const parent = item.parentElement;
    const parentStyle = window.getComputedStyle(parent);
    if (parentStyle.position === "static") {
      parent.style.position = "relative";
      parent.dataset.jpsksPerm = "static";
    }

    const div = document.createElement("div");
    div.className = 'jpsks__kite-screen jpsks__b64-icon';
    div.setAttribute('data-videoid', item.src);
    div.onclick = (e) => evaluateElement(e.target, videos);
    parent.appendChild(div);
  }

})();
