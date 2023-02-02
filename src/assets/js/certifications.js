window.addEventListener("load", () => {
  if (!is_mobile_or_tablet()) {
    VanillaTilt.init(document.querySelectorAll(".certification-wrapper"), {
      max: 10,
      speed: 400,
      scale: 1.2,
    });
  }
});
