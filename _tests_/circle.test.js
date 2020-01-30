import { Circle } from './../src/circle.js';

describe('Circle', () => {

  test('Correctly create a circle with a given diameter', () => {
    var circle = new Circle(10);
    expect(circle.diameter).toEqual(10);
  });
  test('Correctly determine the area of circle', () => {
    var circle = new Circle(10);
    expect(circle.circleArea()).toEqual(78.53981633974483);
  });
});
