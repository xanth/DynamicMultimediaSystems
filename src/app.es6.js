const $ = require('jquery');

import FilterableFigures from "./filterableFigures.es6.js"

var figs;

let splashBtnWelcome  = $("#splash-btn-welcome");
let splashBtnBack     = $("#splash-btn-back");
let images            = $("#images");

splashBtnWelcome.click(() => {
  splashBtnWelcome.hide();
  images.show('slow');
});

splashBtnBack.click(() => {
  images.hide();
  splashBtnWelcome.show('slow');
});

$("#searchInput").keypress((e) => {
  if (e.which == 13) {
    e.preventDefault();
    figs = figs || new FilterableFigures($(".main figure"));
    var filtered = figs.Filter($(e.target).val());
    if(filtered.length > 0){
      $('.main').html(filtered);
      $(".noresults").hide();
    } else {
      $('.main').html("");
      $(".noresults").show();
    }
  }
});

document.getElementById('login').addEventListener("click", () => {
  alert("You cant do that bro");
});
