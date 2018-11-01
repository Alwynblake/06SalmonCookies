'use strict';
var allStores = [];
var hoursOfOps = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', ];//paste the long 6-8pm string here from the lower vars

function Store(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;

  allStores.push(this);

  this.getCustPerHour();
  this.getCookPerHour();
  this.render();
}
Store.prototype.getCustPerHour = function() {
  for(var i = 0; i < hoursOfOps.length; i++) {
    var perHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);
    this.custPerHour.push(perHour);
  }
  console.log('custPerHour', this.custPerHour);
};

Store.prototype.getCookPerHour = function() {
  for(var i = 0; i < hoursOfOps.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal += perHour;
  }
  console.log('cookiesPerHour', this.cookiesPerHour);
};

Store.prototype.render = function() {
  this.getCustPerHour();

  var tableBody = document.getElementById('tbl-body'); // TODO: change to table body after creating that function
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for (var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  var totalEl = document.createElement('td');
  totalEl.textContent = this.dailyTotal;
  trEl.appendChild(totalEl);

  tableBody.appendChild(trEl);
  //string with "Totals" should appear AFTER allSTORES has filled the row
};

function createTable() {
  var mainEl = document.getElementById('main-content');
  var tblEl = document.createElement('table');
  tblEl.id = 'sales-table';
  mainEl.appendChild(tblEl);
}

function createTableHeader() {
  var tblEl = document.getElementById('sales-table');
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  var emptyTh = document.createElement('th');

  trEl.appendChild(emptyTh);

  for(var i = 0; i < hoursOfOps.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hoursOfOps[i];
    trEl.appendChild(thEl);
  }

  var totalEl = document.createElement('th');
  totalEl.textContent = 'Total';
  trEl.appendChild(totalEl);

  theadEl.appendChild(trEl);
  tblEl.appendChild(theadEl);
}

function createTableBody() {
  var tblEl = document.getElementById('sales-table');
  var tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'tbl-body';
  tblEl.appendChild(tbodyEl);
}

function createTableFooter() {
  var tfootElCheck = document.getElementById('tbl-foot');

  if(tfootElCheck) {
    tfootElCheck.remove();
  }

  var tblEl = document.getElementById('sales-table');
  var tfootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');

  tfootEl.id = 'tbl-foot';

  var emptyThEl = document.createElement('th');
  emptyThEl.textContent = 'Totals';
  trEl.appendChild(emptyThEl);

  var grandTotal = 0;
  for(var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');
    var totals = 0;

    for(var j = 0; j < Store.length; j++) {
      console.log('Store', Store);
      totals += allStores[j].cookiesPerHour[i];
    }

    tdEl.textContent = totals;
    trEl.appendChild(tdEl);

    grandTotal += totals;
  }

  var grandTotalEl = document.createElement('td');
  grandTotalEl.textContent = grandTotal;
  trEl.appendChild(grandTotalEl);

  tfootEl.appendChild(trEl);
  tblEl.appendChild(tfootEl);
}


(function run() {
  createTable();
  createTableHeader();
  createTableBody();
})();

new Store('First and Pike', 23, 65, 6.4);
new Store('SeaTac', 12, 34, 3.4);
new Store('Seattle Center', 3, 5, 4.1);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
createTableFooter();

// var salesFormEl = document.getElementById('sales-form');
// salesFormEl.addEventListener('submit', function() {})

// document.getElementById('salesform').addEventListener('submit', function(event) {
//   event.preventDefault();

//   var name = event.target.storename.value;
//   var min = event.target.min.value;
//   var max = event.target.max.value;
//   var avg = event.target.avg.value;

//   new Store(name, min, max, avg);

//   event.target.storename.value = '';
//   event.target.min.value = '';
//   event.target.max.value = '';
//   event.target.avg.value = '';
// });

