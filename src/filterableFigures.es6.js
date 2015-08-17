export default class FilterableFigures {
  constructor(dom){
    this.elements = dom;
  }

  Filter(filter){
    return filter.trim() === "" ? this.elements : _(this.elements).filter((element) => {
      return element.textContent.toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1;
    }).value();
  }
}
