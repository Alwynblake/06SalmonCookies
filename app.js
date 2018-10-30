//What is a JS Object?
var store1standPike = {
  location : '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  openHours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  avgCustomersPerHourArray: [],
  avgCustomersPerHourGenerator: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust+1)) + this.minCust);
  },
  totalCookies: function() {
    var sum = 0;
    for(var hours = 0; hours < 15; hours++);
    var totalCookies = Math.floor(this.avgCookieSale * this.avgCustomersPerHourArray());
    console.log('Cookies', totalCookies);
    sum = sum + totalCookies;
  },
  

/*
  counter for length of empty arrary: for(var i = 0; i < avgCustomersPerHourArray.length; i++) { then assign a number to each fuck
};

dailyCookiesSold: function () {
    return this.avgCustomersPerHourArray * this.avgCookieSale;
  },

customersPerHour: function getRandomIntInclusive(minCust, maxCust) {
  minCust = Math.ceil(minCust);
  maxCust = Math.floor(maxCust);
  return Math.floor(Math.random() * (maxCust - minCust+1)) + minCust;
*/
};