window.addEventListener("load", () => {
  let all_projects = document.getElementsByClassName("project-wrapper");
  document
    .getElementById("project-type-selector")
    .addEventListener("change", (e) => {
      let class_to_contain = e.target.selectedOptions[0].value;
      if (class_to_contain === "all") {
        class_to_contain = "project-wrapper";
      }
      for (let i = 0; i < all_projects.length; i++) {
        let project = all_projects[i];
        if (!project.classList.contains(class_to_contain)) {
          project.classList.add("hidden");
        } else {
          project.classList.remove("hidden");
        }
      }
    });

  VanillaTilt.init(document.querySelectorAll(".project-wrapper"), {
    max: 4,
    speed: 200,
  });
});
