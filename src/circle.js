export function Circle(diameter) {
  this.diameter = diameter;
}

Circle.prototype.circleArea = function() {
  return (Math.PI/4)*Math.pow(this.diameter,2);
}
