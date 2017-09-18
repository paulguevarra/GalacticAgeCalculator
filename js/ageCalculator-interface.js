var AgeToCalculate = require('./../js/ageCalculator.js').ageToCalculateModule;

$(document).ready(function(){
  $("#user-age-form").submit(function(event){
    event.preventDefault();
    var input = $("input#earthyears").val();
    var ageToCalculate = new AgeToCalculate("red");
    var output = ageToCalculate.ageToMercury(input);
    $("#solution").text(output);
  });
});
