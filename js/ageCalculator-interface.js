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
    $('#ageMercury').text(ageToCalculate.changeToYears(mercurySeconds));
    $('#ageVenus').text(ageToCalculate.changeToYears(venusSeconds));
    $('#ageMars').text(ageToCalculate.changeToYears(marsSeconds));
    $('#ageJupiter').text(ageToCalculate.changeToYears(jupiterSeconds));
    $('#solution').show();
    $('#formsheet').hide();

  });
});
