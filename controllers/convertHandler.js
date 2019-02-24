/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.getFirstLetterIndex = function(input) {
    const regex = /[a-zA-Z]/;
    return input.indexOf(input.match(regex));
  }
  
  this.getNum = function(input) {
    var result;
    const firstLetterIndex = this.getFirstLetterIndex(input);
    if (firstLetterIndex == 0) return 1;    
    result = input.slice(0, firstLetterIndex);
    // check if input has double fraction
    const secondFraction = result.indexOf('/', result.indexOf('/') + 1);
    if (secondFraction > 0) result = 'invalid number';
    if (result.indexOf('/') > 0) {
      let inputArray = result.split('/');
      result = inputArray[0] / inputArray[1];
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
    const firstLetterIndex = this.getFirstLetterIndex(input);

    if (firstLetterIndex < 0 ) return 'invalid unit';
    
    const unit = input.slice(firstLetterIndex);
    const validUnit = validUnits.includes(unit);
    
    validUnit ? result = unit : result = 'invalid unit';
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    const initUnitLowerCase = initUnit.toLowerCase();
    const units = {
      gal: 'l',
      l: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs'
    }
    result = units[initUnitLowerCase];
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    const unitLowerCase = unit.toLowerCase();
    const units = {
      gal: 'gallon',
      l: 'liter',
      mi: 'mile',
      km: 'kilometer',
      lbs: 'pound',
      kg: 'kilogram'
    }
    result = units[unitLowerCase];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    const convertTable = {
      gal: galToL,
      l: 1 / galToL,
      mi: miToKm,
      km: 1 / miToKm,
      lbs: lbsToKg,
      kg: 1 / lbsToKg
    };
    //result = (initNum * convertTable[initUnit.toLowerCase()]);
    result = Math.round(initNum * convertTable[initUnit.toLowerCase()] * 10**5) / 10**5;
    // round to 6 decimal digits
    //result = (result.toFixed(6));
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      result = 'invalid number and unit';
    } else if (initNum === 'invalid number') {
      result = 'invalid number';
    } else if (initUnit === 'invalid unit') {
      result = 'invalid unit';
    } else {
      const spelledeOutInitUnits = this.spellOutUnit(initUnit) + 's';
      const spelledOutReturnUnits = this.spellOutUnit(returnUnit) + 's';
      result = `${initNum} ${spelledeOutInitUnits} converts to ${returnNum} ${spelledOutReturnUnits}`;
    }
    return result;
  };
  
}

module.exports = ConvertHandler;
