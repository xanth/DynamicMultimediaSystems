"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterableFigures = (function () {
  function FilterableFigures(dom) {
    _classCallCheck(this, FilterableFigures);

    this.elements = dom;
  }

  _createClass(FilterableFigures, [{
    key: "Filter",
    value: function Filter(filter) {
      return filter.trim() === "" ? this.elements : _(this.elements).filter(function (element) {
        return element.textContent.toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1;
      }).value();
    }
  }]);

  return FilterableFigures;
})();

var figs;

$("#searchInput").keypress(function (e) {
  if (e.which == 13) {
    e.preventDefault();
    figs = figs || new FilterableFigures($(".main figure"));
    var filtered = figs.Filter($(e.target).val());
    if (filtered.length > 0) {
      $('.main').html(filtered);
      $(".noresults").hide();
    } else {
      $('.main').html("");
      $(".noresults").show();
    }
  }
});

document.getElementById('login').addEventListener("click", function () {
  alert("You cant do that bro");
});
//# sourceMappingURL=app.js.map
