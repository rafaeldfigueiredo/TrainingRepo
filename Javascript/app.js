export default class Dog {
  constructor(name,color) {  // Constructor
    this.name = name;
    this.color = color;
  }
  getName() {
    console.log(this.name)
  }
  setName(newName){
    this.name = newName
  }
}