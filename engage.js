const twit = require('twit');
const chefConfig = require('./chef.js');
const whChef = new twit(chefConfig);
const target = require('./switch.js');

function searchIt(target) {
    whChef.get('search/tweets', { q: target + "\"Dick\"", }, gotData);

    function gotData(err, data) {
        if (!data) {
            console.log(err);
        }
        if (data) {
            var newFan = data.statuses[Math.floor(Math.random() * data.statuses.length)];
            var statusObj = {
                status: "@" + newFan.user.screen_name +
                    ' All I heard were the words ' + target + ' and dick. I think I have something to contribute to those types of convos. I feed him dicks quite often',
                in_reply_to_status_id: newFan.id_str
            }
            whChef.post('statuses/update', statusObj);
        }
    }
}

searchIt(target);