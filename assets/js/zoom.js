// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });

  medium_zoom.on("open", function (event) {
    var img = event.detail.zoom.getZoomedImage();
    if (img) {
      img._originalParent = img.parentNode;
      img._originalNextSibling = img.nextSibling;
      var rect = img.getBoundingClientRect();
      img.style.position = "fixed";
      img.style.top = rect.top + "px";
      img.style.left = rect.left + "px";
      img.style.width = rect.width + "px";
      img.style.height = rect.height + "px";
      img.style.margin = "0";
      document.body.appendChild(img);
    }
  });

  medium_zoom.on("close", function (event) {
    var img = event.detail.zoom.getZoomedImage();
    if (img && img._originalParent) {
      img._originalParent.insertBefore(img, img._originalNextSibling);
      img.style.position = "";
      img.style.top = "";
      img.style.left = "";
      img.style.width = "";
      img.style.height = "";
      img.style.margin = "";
    }
  });
});
