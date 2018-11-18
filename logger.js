var request = require('request')
const express = require('express')
const app = express()
var fs = require('fs');
app.get('/log/:topic/:userId/:requestTimestamp', (req, res) => {
    const topic = req.params.topic
    const userId = req.params.userId
    const requestTimestamp = req.param.requestTimestamp
    fs.appendFile('~/tmp/logstash.txt', userId+", "+topic + ", " + requestTimestamp +"\r\n", function(err){
        if(err){
            console.log(err);
        }
    });
});

app.listen(3003, () => {
    console.log("Server is up and listening on 3003...")
  })