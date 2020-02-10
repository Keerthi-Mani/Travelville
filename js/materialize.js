//Side Menu
const sideNav = document.querySelector(".sidenav");
//Materialize js library - use M
M.Sidenav.init(sideNav, {});

//Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  interval: 6000
});
