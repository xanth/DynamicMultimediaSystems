'use strict';

document.getElementById('search').addEventListener("click", function () {
  var value = document.getElementById('searchInput').value;
  if (isNaN(value)) {
    alert("invalid input");
    return;
  }
  var picThumbnail = document.getElementsByClassName('picThumbnail')[0].innerHTML;
  var main = document.getElementById("main");
  main.innerHTML = "";
  while (value-- > 0) {
    main.innerHTML += '<figure class="picThumbnail ' + (value % 2 == 0 ? "odd" : "") + '">' + picThumbnail + '</figure>';
  }
});

document.getElementById('login').addEventListener("click", function () {
  alert("You cant do that bro");
});
//# sourceMappingURL=app.js.map
