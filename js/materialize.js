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

// Scrollspy
const ScrollSpy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(ScrollSpy, {});

//Autocomplete
const autoComplete = document.querySelector(".autocomplete");
M.Autocomplete.init(autoComplete, {
  data: {
    Aruba: null,
    "Cancun Mexico": null,
    Hawaii: null,
    Florida: null,
    California: null,
    Jamacia: null,
    Europe: null,
    "The Bahamas": null,
    China: null,
    India: null
  }
});

// Material Boxed
const materialBoxed = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialBoxed, {});
