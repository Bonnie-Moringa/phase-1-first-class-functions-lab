//returntwodivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  

  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  console.log(selectingDrivers[0](drivers)); 


//FareMultiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  
  const fareDoubler = createFareMultiplier(2);
  console.log(fareDoubler(10)); 
  
  
  //fare tripler
  const fareTripler = function(fare) {
    return fare * 3;
  };
  

  console.log(fareTripler(12)); 
  console.log(fareTripler(36));  


  //select different drivers
  const selectDifferentDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  

  const twodrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 

  //returns last two drivers
  const selectDifferentDriver = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Test case
  const twodriver = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 