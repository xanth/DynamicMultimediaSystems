const API_KEY = "api_key=dc140afe3fd3a251c2fdf9dcd835be5c";

export class Flickr {
  url(type, str){
    switch(type){
      case "interestingness":
        return `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&format=json&nojsoncallback=1&per_page=20&${API_KEY}`;
      case "search":
        return `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&per_page=20&text=${str}&${API_KEY}`;
      case "getSizes":
        return `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&nojsoncallback=1&photo_id=${str}&${API_KEY}`;
    }
  }

  get(type, str, cb){
    $.getJSON(this.url(type, str), (images) => {
        cb(images);
    });
  }
}
