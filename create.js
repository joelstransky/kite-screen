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
  // https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid
  const videos = document.getElementsByTagName("video");
  for (let item of videos) {
    const div = document.createElement("div");
    div.className = 'jpsks__kite-screen jpsks__b64-icon';
    div.setAttribute('data-videoid', item.src);
    div.onclick = (e) => evaluateElement(e.target, videos);
    item.parentElement.appendChild(div);
  }

})();
