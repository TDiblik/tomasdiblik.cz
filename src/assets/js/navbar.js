var is_navbar_active = false;

window.onload = () => {
  Object.values(document.getElementsByClassName("menu-icon-wrapper")).forEach(
    (menu_icon_element) => {
      menu_icon_element.addEventListener("click", (e) => {
        let menu = document.getElementById("menu");
        let menu_open_button = document.getElementById("open-menu-wrapper");
        let menu_close_button = document.getElementById("close-menu-wrapper");

        if (menu_open_button.classList.contains("active")) {
          menu.classList.add("active");
          menu.classList.remove("not-active");

          menu_open_button.classList.remove("active");
          menu_close_button.classList.add("active");

          document.body.classList.add("menu-active");
        } else {
          menu.classList.remove("active");
          menu.classList.add("not-active");

          menu_close_button.classList.remove("active");
          menu_open_button.classList.add("active");

          document.body.classList.remove("menu-active");
        }
      });
    }
  );
};
