(async () => {
  const evaluateElement = async (target, videos) => {
    for (let item of videos) {
      if (item.src === target.dataset.videoid){
        try {
            if (item !== document.pictureInPictureElement) {
              target.classList.add('jps__reel-in');
              await item.requestPictureInPicture();
            } else {
              target.classList.remove('jps__reel-in');
              await document.exitPictureInPicture();
            }
          } catch (error) {}
      }
    }
  }
  const videos = document.getElementsByTagName("video");
  for (let item of videos) {
    const div = document.createElement("div");
    div.className = 'jps__kite-screen';
    div.setAttribute('data-videoid', item.src);
    div.onclick = (e) => evaluateElement(e.target, videos);
    item.parentElement.appendChild(div);
  }

})();
