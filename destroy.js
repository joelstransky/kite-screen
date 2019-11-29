(async () => {
  const screens = document.getElementsByClassName("jps__kite-screen");
  for (let i = screens.length; 0 < i; ) {
    screens[--i].remove();
  }
  try {
    await document.exitPictureInPicture();
  } catch (error) {}
})();
