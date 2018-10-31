'use strict';

var pikeAndFirst = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p'],
  dailyTotal: 0,
  generateRandomCustPerHour: function() {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('custPerHour', this.custPerHour);
  },
  generateHourlySales: function() {
    // line below will populate custPerHour array
    this.generateRandomCustPerHour();

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);
      //this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
  render: function() {
    this.generateHourlySales();
    // create
    var container = document.getElementById('main-content');
    var title = document.createElement('h3');
    container.appendChild(title);
    var total = document.createElement('li');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var hourly = document.createElement('li');
      hourly.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      // ${this.dailyTotal} is in this function, i need to apply this on line 50?
      container.appendChild(hourly);
    }
    // provide content
    title.textContent = this.name;
    total.textContent = `Total: ${this.dailyTotal} cookies`;

    // append
    container.appendChild(total);
  }
};

pikeAndFirst.render();

//start new shop

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p'],
  dailyTotal: 0,
  generateRandomCustPerHour: function() {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('custPerHour', this.custPerHour);
  },
  generateHourlySales: function() {
    // line below will populate custPerHour array
    this.generateRandomCustPerHour();

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);
      //this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
  render: function() {
    this.generateHourlySales();
    // create
    var container = document.getElementById('main-content');
    var title = document.createElement('h3');
    container.appendChild(title);
    var total = document.createElement('li');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var hourly = document.createElement('li');
      hourly.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      // ${this.dailyTotal} is in this function, i need to apply this on line 50?
      container.appendChild(hourly);
    }
    // provide content
    title.textContent = this.name;
    total.textContent = `Total: ${this.dailyTotal} cookies`;

    // append
    container.appendChild(total);
  }
};

seaTacAirport.render();

//start new shop

var seattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p'],
  dailyTotal: 0,
  generateRandomCustPerHour: function() {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('custPerHour', this.custPerHour);
  },
  generateHourlySales: function() {
    // line below will populate custPerHour array
    this.generateRandomCustPerHour();

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);
      //this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
  render: function() {
    this.generateHourlySales();
    // create
    var container = document.getElementById('main-content');
    var title = document.createElement('h3');
    container.appendChild(title);
    var total = document.createElement('li');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var hourly = document.createElement('li');
      hourly.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      // ${this.dailyTotal} is in this function, i need to apply this on line 50?
      container.appendChild(hourly);
    }
    // provide content
    title.textContent = this.name;
    total.textContent = `Total: ${this.dailyTotal} cookies`;

    // append
    container.appendChild(total);
  }
};

seattleCenter.render();

//start new shop

var capitolHill = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p'],
  dailyTotal: 0,
  generateRandomCustPerHour: function() {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('custPerHour', this.custPerHour);
  },
  generateHourlySales: function() {
    // line below will populate custPerHour array
    this.generateRandomCustPerHour();

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);
      //this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
  render: function() {
    this.generateHourlySales();
    // create
    var container = document.getElementById('main-content');
    var title = document.createElement('h3');
    container.appendChild(title);
    var total = document.createElement('li');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var hourly = document.createElement('li');
      hourly.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      // ${this.dailyTotal} is in this function, i need to apply this on line 50?
      container.appendChild(hourly);
    }
    // provide content
    title.textContent = this.name;
    total.textContent = `Total: ${this.dailyTotal} cookies`;

    // append
    container.appendChild(total);
  }
};

capitolHill.render();

//start new shop

var alki = {
  name: 'alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p'],
  dailyTotal: 0,
  generateRandomCustPerHour: function() {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custPerHour.push(randomCust);
    }
    console.log('custPerHour', this.custPerHour);
  },
  generateHourlySales: function() {
    // line below will populate custPerHour array
    this.generateRandomCustPerHour();

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);
      //this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }
    console.log('cookiesPerHour', this.cookiesPerHour);
  },
  render: function() {
    this.generateHourlySales();
    // create
    var container = document.getElementById('main-content');
    var title = document.createElement('h3');
    container.appendChild(title);
    var total = document.createElement('li');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var hourly = document.createElement('li');
      hourly.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      // ${this.dailyTotal} is in this function, i need to apply this on line 50?
      container.appendChild(hourly);
    }
    // provide content
    title.textContent = this.name;
    total.textContent = `Total: ${this.dailyTotal} cookies`;

    // append
    container.appendChild(total);
  }
};

alki.render();
