const animals = require('animals');
const m = require('./data/meals.js');
const bf = m.breakfast;
const cr = m.cereal;
const dr = m.drink;
const twit = require('twit');
//these are depdedencies established in other files
//this is creating a twit object using API tokens established in a file that is ignored from git
const chefConfig = require('./chef.js');
const whChef = new twit(chefConfig);

function breakFast() {
    var dick = animals();
    var cooked = m.cookType[Math.floor(Math.random() * m.breakfast.length)];
    var breakfast = bf[Math.floor(Math.random() * bf.length)];
    var cereal = cr[Math.floor(Math.random() * cr.length)];
    var drink = dr[Math.floor(Math.random() * dr.length)];
    const params = {
        status: 'today for breakfast @realdonaldtrump, @jaredkushner and @DonaldJTrumpJr are having' +
            breakfast + ' with ' + cooked + dick + '-dicks.' +
            ' @EricTrump is having a bowl of ' + cereal + ' & a sippy cup of ' + drink
    }
    whChef.post('statuses/update', params);
}

breakFast();