export class Circle {
  constructor (diameter) {
    this.diameter = diameter;
  }
  circleArea() {
    return (Math.PI/4)*Math.pow(this.diameter,2);
  }
}
