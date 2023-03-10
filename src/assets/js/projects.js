window.addEventListener("load", () => {
  let all_titles = document.getElementsByClassName("projects-container-title");
  let all_containers = document.getElementsByClassName("projects-container");
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
          project.classList.add("project-hidden");
        } else {
          project.classList.remove("project-hidden");
        }
      }

      for (let i = 0; i < all_containers.length; i++) {
        let current_title = all_titles[i];
        let current_container = all_containers[i];

        let visible_projects_count =
          current_container.querySelectorAll(".project-wrapper").length;
        let hidden_project_count = current_container.querySelectorAll(
          ".project-wrapper.project-hidden"
        ).length;

        if (visible_projects_count === hidden_project_count) {
          current_title.classList.add("project-hidden");
        } else {
          current_title.classList.remove("project-hidden");
        }
      }
    });

  if (!is_mobile_or_tablet()) {
    VanillaTilt.init(document.querySelectorAll(".project-wrapper"), {
      max: 4,
      speed: 200,
      scale: 1.03,
    });
  }
});
