const twit = require('twit');
const chefConfig = require('./chef.js');
const whChef = new twit(chefConfig);

function searchIt() {
    whChef.get('search/tweets', { q: "\" Trump Dick\"", }, gotData);

    function gotData(err, data) {
        if (!data) {
            console.log(err);
        }
        if (data) {
            for (var i = 0; i <= 3; i++) {
                var statusObj = {
                    status: "@" + data.statuses[i].user.screen_name +
                        " ay yo. Alls I heard was talk bout' trump and dicks. I ain't so good at readin'. I'm just a bot. But I thought you might wanna follow my page! I feed that man dicks everyday",
                    in_reply_to_status_id: data.statuses[i].id_str
                }
                whChef.post('statuses/update', statusObj);
            }
        }
    }
}

searchIt();