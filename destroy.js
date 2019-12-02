(async () => {
  const screens = document.getElementsByClassName("jpsks__kite-screen");
  for (let i = screens.length; 0 < i; ) {
    screens[--i].remove();
  }
  try {
    await document.exitPictureInPicture();
  } catch (error) {}
})();
