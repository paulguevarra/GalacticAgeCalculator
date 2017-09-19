function AgeToCalculate(name){
  this.name = name;
}

AgeToCalculate.prototype.getAgeInYears = function(birthDate){
  let todayDate = new Date();
  let years = todayDate.getFullYear() - birthDate.getFullYear();
  if (todayDate.getMonth() < birthDate.getMonth()){
    years--;
  } else if (todayDate.getMonth() == birthDate.getMonth()){
    if(todayDate.getDate() < birthDate.getDate()){
      years--;
    }
  }
  return years;
};

AgeToCalculate.prototype.changeToSeconds=function(ageInYears){
  let yearsToSeconds = 31556952;
  return ageInYears * yearsToSeconds;
};

AgeToCalculate.prototype.toMercuryAge = function(ageInSeconds){
  let yearsToSeconds = 31556952;
  const mercury = 0.24;
  return ((ageInSeconds / mercury)).toFixed(2);
};

AgeToCalculate.prototype.changeToYears = function(ageInSeconds){
  let yearsToSeconds = 31556952;
  return (ageInSeconds/yearsToSeconds).toFixed(2);
};

AgeToCalculate.prototype.toVenusAge = function(ageInSeconds){
  const mercury = 0.62;
  return (ageInSeconds / mercury).toFixed(2);
};

AgeToCalculate.prototype.toMarsAge = function(ageInSeconds){
  const mercury = 1.88;
  return (ageInSeconds / mercury).toFixed(2);
};

AgeToCalculate.prototype.toJupiterAge = function(ageInSeconds){
  const mercury = 11.86;
  return (ageInSeconds / mercury).toFixed(2);
};

AgeToCalculate.prototype.earthSecondsToLive = function(ageInSeconds){
  const aveEarthLifeSpan = 79 * 31556952;
  if (aveEarthLifeSpan <= ageInSeconds){
    return "surpassed the average";
  } else {
    return (aveEarthLifeSpan - ageInSeconds).toFixed(2);
  }
};


AgeToCalculate.prototype.mercurySecondsToLive = function(ageInSeconds){
  const aveMercuryLifeSpan = 40 * 31556952 / 0.62;
  if (aveMercuryLifeSpan <= ageInSeconds){
    return "surpassed the average";
  } else {
    return (aveMercuryLifeSpan - ageInSeconds).toFixed(2);
  }
};

AgeToCalculate.prototype.venusSecondsToLive = function(ageInSeconds){
  const aveVenusLifeSpan = 50 * 31556952 / 0.62;
  if (aveVenusLifeSpan <= ageInSeconds){
    return "surpassed the average";
  } else {
    return (aveVenusLifeSpan - ageInSeconds).toFixed(2);
  }
};

AgeToCalculate.prototype.marsSecondsToLive = function(ageInSeconds){
  const aveMarsLifeSpan = 60 * 31556952 / 0.62;
  if (aveMarsLifeSpan <= ageInSeconds){
    return "surpassed the average";
  } else {
    return (aveMarsLifeSpan - ageInSeconds).toFixed(2);
  }
};

AgeToCalculate.prototype.jupiterSecondsToLive = function(ageInSeconds){
  const aveJupiterLifeSpan = 30 * 31556952 / 0.62;
  if (aveJupiterLifeSpan <= ageInSeconds){
    return "surpassed the average";
  } else {
    return (aveJupiterLifeSpan - ageInSeconds).toFixed(2);
  }
};








exports.ageToCalculateModule = AgeToCalculate;
