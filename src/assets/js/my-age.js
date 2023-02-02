window.addEventListener("load", () => {
  Object.values(document.getElementsByClassName("my-age")).forEach(
    (element) => {
      element.innerText =
        new Date(
          new Date().getTime() - new Date("2005-06-17").getTime()
        ).getFullYear() -
        1970 +
        " y.o.";
    }
  );
});
