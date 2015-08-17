import FilterableFigures from "./filterableFigures.es6.js" 

var figs;

$("#searchInput").keypress( (e) => {
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
