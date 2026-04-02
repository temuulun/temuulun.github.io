// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    margin: { top: 70, right: 20, bottom: 70, left: 20 },
  });

  medium_zoom.on("open", function () {
    var overlay = document.querySelector(".medium-zoom-overlay");
    var image = document.querySelector(".medium-zoom-image--opened");
    if (overlay) overlay.style.setProperty("z-index", "9999", "important");
    if (image) image.style.setProperty("z-index", "9999", "important");
  });
});
