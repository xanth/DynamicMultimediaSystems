document.getElementById('search').addEventListener("click", () => {
  var value = document.getElementById('searchInput').value;
  if(isNaN(value)){
    alert("invalid input");
    return;
  }
  let picThumbnail = document.getElementsByClassName('picThumbnail')[0].innerHTML;
  let main  = document.getElementById("main");
  main.innerHTML = "";
  while(value-- > 0){
    main.innerHTML += `<figure class="picThumbnail ${value % 2 == 0 ? "odd" : ""}">` + picThumbnail + `</figure>` ;
  }
});

document.getElementById('login').addEventListener("click", () => {
  alert("You cant do that bro");
});
