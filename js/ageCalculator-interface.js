var AgeToCalculate = require('./../js/ageCalculator.js').ageToCalculateModule;

$(document).ready(function(){
  $("#user-age-form").submit(function(event){
    event.preventDefault();
    let ageToCalculate = new AgeToCalculate("name");
    let inputBirthDate = new Date($("#earthyears").val());
    let age = ageToCalculate.getAgeInYears(inputBirthDate);
    let earthSeconds = ageToCalculate.changeToSeconds(age);
    let mercurySeconds = ageToCalculate.toMercuryAge(earthSeconds);
    let venusSeconds = ageToCalculate.toVenusAge(earthSeconds);
    let marsSeconds = ageToCalculate.toMarsAge(earthSeconds);
    let jupiterSeconds = ageToCalculate.toJupiterAge(earthSeconds);

    $('#age').text(age);
    $('#secondsEarth').text(earthSeconds);
    $('#secondsMercury').text(mercurySeconds);
    $('#secondsVenus').text(venusSeconds);
    $('#secondsMars').text(marsSeconds);
    $('#secondsJupiter').text(jupiterSeconds);
    $('#earthLeft').text(ageToCalculate.earthSecondsToLive(earthSeconds));
    $('#mercuryLeft').text(ageToCalculate.mercurySecondsToLive(earthSeconds));
    $('#venusLeft').text(ageToCalculate.venusSecondsToLive(earthSeconds));
    $('#marsLeft').text(ageToCalculate.marsSecondsToLive(earthSeconds));
    $('#jupiterLeft').text(ageToCalculate.jupiterSecondsToLive(earthSeconds));


    // $("span#solutionEarth").text('You are' + age + ' in Earth years. That converts to ' + earthSeconds + ' seconds which means you would have ' + ageToCalculate.earthSecondsToLive(earthSeconds) + ' seconds left on Earth.');
    // $("span#solutionMercury").text("On Mercury, you would have lived " + mercurySeconds + " seconds which means you would have " + ageToCalculate.mercurySecondsToLive(earthSeconds) + " seconds left on Mercury.");
    // $("span#solutionVenus").text("On Venus, you would have lived " + venusSeconds + " seconds which means you would have " + ageToCalculate.venusSecondsToLive(earthSeconds) + " seconds left on Venus.");
    // $("span#solutionMars").text("On Mars, you would have lived " + marsSeconds + " seconds which means you would have " + ageToCalculate.marsSecondsToLive(earthSeconds) + " seconds left on Mars.");
    // $("span#solutionJupiter").text("On Jupiter, you would have lived " + jupiterSeconds + " seconds which means you would have " + ageToCalculate.jupiterSecondsToLive(earthSeconds) + " seconds left on Jupiter.");
  });
});
