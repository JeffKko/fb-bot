/**
 * Created by Jeff on 2016/5/20.
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var request = require("request");

/* GET users listing. */
router.get('/', function(req, res, next) {

    console.log("in fb callback.");

    if (req.query['hub.verify_token'] === '<YOUR TOKEN>') {
        res.send(req.query['hub.challenge']);
    }
    res.send('Error, wrong validation token');
});

router.post('/', function(req, res) {

    console.log(req.body);

    var messaging_events = req.body.entry[0].messaging;

    for (var i = 0; i < messaging_events.length; i++) {

        var event = req.body.entry[0].messaging[i];
        var sender = event.sender.id;
        if (event.message && event.message.text) {
            var text = event.message.text;
            sendTextMessage(sender, "Text received, echo: "+ text.substring(0, 200));
        }
    }
    res.sendStatus(200);


    function sendTextMessage(sender, text) {

        var messageData = {
            text: text
        };

        request({
            url: 'https://graph.facebook.com/v2.6/me/messages',
            qs: {
                access_token: '<YOUR ACCESS_TOKEN>'
            },
            method: 'POST',
            json: {
                recipient: {
                    id: sender
                },
                message: messageData
            }
        }, function(error, response, body) {
            if (error) {
                console.log('Error sending message: ', error);
            } else if (response.body.error) {
                console.log('Error: ', response.body.error);
            }
        });
    }
});



module.exports = router;