const _ = require('lodash');

export default class FilterableFigures {
  constructor(dom){
    this.elements = dom;
  }

  Filter(filter){
    if(filter === null || filter === undefined){
      return new Array();
    } else if(filter.trim() === ""){
      return this.elements;
    } else {
      return _(this.elements).filter((element) => {
        return element.textContent.toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1;
      }).value();
    }
  }
}
