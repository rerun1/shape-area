import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import './circle.js';
import { Circle } from './circle.js';

function resetForm(){
  $("input#diameter").val("");
}

$(document).ready(function(){
  $("form#shapes").submit(function(event){
    event.preventDefault();
    let inputDiameter = $("input#diameter").val();
    let circle = new Circle(inputDiameter);
    let circleAreaResult = circle.circleArea(circle);
    let displayCircleArea = "The area of a circle with the diameter of " + inputDiameter + ", is " + circleAreaResult + ".";
    $("p#circleAnswer").text(displayCircleArea);
    resetForm();
  });
});
