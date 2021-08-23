const animals = require('animals');
const m = require('./data/meals.js');
const bf = m.breakfast;
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
            status: 'today for breakfast @mccloskeyusa is having' +
                breakfast + ' with ' + cooked + dick + '-dicks.'
        }
        // whChef.post('statuses/update', params);
    console.log(params.status);
=======
        status: 'today @mccloskeyusa had' +
        breakfast + 'with ' + cooked + dick + '-dicks for breakfast. he made a big ol mess of his shirt'
    }
    whChef.post('statuses/update', params);
    
>>>>>>> 6c63d247aa0c4865fdddbe798b9aad66c85672cc
}

breakFast();