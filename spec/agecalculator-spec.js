var AgeToCalculate = require('./../js/ageCalculator.js').ageToCalculateModule;

describe('AgeToCalculate', function() {
  let cal;
  let ageToCalculate;
  let birthDate;
  beforeEach(function(){
    cal = new AgeToCalculate('jacob');
    birthDate = new Date ('1980-09-18');
  });

  it('should test whether can instantiate AgeToCalculate object', function() {
    expect(cal.name).toEqual('jacob');
  });

  it('should test whether can calculate the Earth age from birthday', function(){
  expect(cal.getAgeInYears(birthDate)).toEqual(37);
  });

  it('should test whether can convert Earth age to seconds', function(){
  expect(cal.changeToSeconds(cal.getAgeInYears(birthDate))).toEqual(1167607224);
  });

  it('should test whether can take Earth age and apply to Mercury years', function(){
  expect(cal.toMercuryAge(cal.changeToSeconds(cal.getAgeInYears(birthDate)))).toEqual('4865030100.00');
  });

  it('should test whether can take Earth age and apply to Venus years', function(){
  expect(cal.toVenusAge(cal.changeToSeconds(cal.getAgeInYears(birthDate)))).toEqual('1883237458.06');
  });

  it('should test whether can take Earth age and apply to Mars years', function(){
  expect(cal.toMarsAge(cal.changeToSeconds(cal.getAgeInYears(birthDate)))).toEqual('621067672.34');
  });

  it('should test whether can take Earth age and apply to Jupiter years', function(){
  expect(cal.toJupiterAge(cal.changeToSeconds(cal.getAgeInYears(birthDate)))).toEqual('98449175.72');
  });

  it('should test whether can take planet age and calculate average time left to live', function(){
  expect(cal.earthSecondsToLive(cal.changeToSeconds(cal.getAgeInYears(birthDate)))).toEqual('1325391984.00');
  });

  it('should identify if age on planet exceeds average planet life span ', function(){
  expect(cal.earthSecondsToLive(cal.changeToSeconds(90))).toEqual('surpassed the average');
  });
});
