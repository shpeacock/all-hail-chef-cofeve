const twit = require('twit');
const chefConfig = require('./chef.js');
const whChef = new twit(chefConfig);

function searchIt() {
    whChef.get('search/tweets', { q: "\"@DevinNunes Dick\"", }, gotData);

    function gotData(err, data) {
        if (!data) {
            console.log(err);
        }
        if (data) {
            var newFan = data.statuses[Math.floor(Math.random() * data.statuses.length)];
            var statusObj = {
                status: "@" + newFan.user.screen_name +
                    " All I heard were the words Nunes and dick. I think I have something to contribute to those types of convos. I feed him dicks everyday. ",
                in_reply_to_status_id: newFan.id_str
            }
            whChef.post('statuses/update', statusObj);
        }
    }
}

searchIt();