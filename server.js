// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// GET [project_url]/api/timestamp/:date_string?
// https://sly-wildflower.glitch.me/api/timestamp/2938493875
// /api/timestamp/1450137600
// unix	1450137600
// utc	"Sat, 17 Jan 1970 18:48:57 GMT"
// /api/timestamp/2015-12-25

app.get("/api/timestamp/:date_string?", function(req,res) {
  try {
    let pdate;
    if (pdate !== undefined) pdate = new Date(req.params.date_string); else pdate = new Date()
    res.json({"unix": pdate.getTime(), "utc" : pdate.toUTCString()});
  }
  catch(error) {
    res.json({"error" : "Invalid Date" });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});