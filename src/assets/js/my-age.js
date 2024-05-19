window.addEventListener("load", () => {
  Object.values(document.getElementsByClassName("my-age")).forEach((element) => {
    element.innerText =
      new Date(new Date().getTime() - new Date("2005-07-01").getTime()).getFullYear() - 1970 + " y.o.";
  });
});
