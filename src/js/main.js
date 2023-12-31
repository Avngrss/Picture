import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInput from "./modules/checkTextInput";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accardions from "./modules/accardions";
import mobileMenu from "./modules/mobileMenu";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  modals();
  sliders(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  sliders(".main-slider-item", "vertical");
  forms();
  mask('[name="phone"]');
  checkTextInput('[name="name"]');
  checkTextInput('[name="message"]');
  showMoreStyles(".button-styles", "#styles .row");
  calc("#size", "#material", "#options", ".promocode", ".calc-price");
  filter();
  pictureSize(".sizes-block");
  accardions(".accordion-heading", ".accordion-block");
  // accardions('.accordion-heading')
  mobileMenu(".burger-menu", ".burger");
  scrolling(".pageup");
  drop();
});
