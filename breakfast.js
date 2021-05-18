const animals = require('animals');
const m = require('./data/meals.js');
const bf = m.breakfast;
<<<<<<< HEAD
const dr = m.drink;
=======
>>>>>>> 51058d29384df9ad0558013c2b62a7f04e4b9c38
const twit = require('twit');
//these are depdedencies established in other files
//this is creating a twit object using API tokens established in a file that is ignored from git
const chefConfig = require('./chef.js');
const whChef = new twit(chefConfig);

function breakFast() {
    var dick = animals();
    var cooked = m.cookType[Math.floor(Math.random() * m.breakfast.length)];
    var breakfast = bf[Math.floor(Math.random() * bf.length)];
    const params = {
<<<<<<< HEAD
        status: 'today for breakfast @DevinNunes is having' +
            breakfast + ' with ' + cooked + dick + '-dicks.'
=======
        status: 'for his VERY LAST BREAKFAST in the WhiteHouse @realdonaldtrump is having' +
            breakfast + ' with ' + cooked + dick + '-dicks.' +
>>>>>>> 51058d29384df9ad0558013c2b62a7f04e4b9c38
    }
    whChef.post('statuses/update', params);
}

breakFast();
