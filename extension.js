const evaluateElement = async (target, videos) => {
  console.log('target is', target.dataset.videoid);
  for (let item of videos) {
    console.log(item.src === target.dataset.videoid)
    if (item.src === target.dataset.videoid){
      try {
          if (item !== document.pictureInPictureElement) {
            console.log('attempting');
            await item.requestPictureInPicture();
          } else {
            await document.exitPictureInPicture();
          }
        } catch (error) {}
    }
  }
}
(async () => {
  const videos = document.getElementsByTagName("video");
  console.log(videos);
  for (let item of videos) {
    const div = document.createElement("div");
    div.className = 'jps__kite-screen';
    div.setAttribute('data-videoid', item.src);
    div.onclick = (e) => evaluateElement(e.target, videos);
    item.parentElement.appendChild(div);
  }

})();
