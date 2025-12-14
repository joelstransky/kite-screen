(async () => {
  const screens = document.getElementsByClassName("jpsks__kite-screen");
  for (let i = screens.length; 0 < i; ) {
    const screen = screens[--i];
    const parent = screen.parentElement;

    // Revert parent position if we changed it
    if (parent && parent.dataset.jpsksPerm === "static") {
      parent.style.position = "";
      delete parent.dataset.jpsksPerm;
    }

    screen.remove();
  }
  try {
    await document.exitPictureInPicture();
  } catch (error) {}
})();
