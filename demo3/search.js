//node-debug search.js
//http://localhost:9090/

'use strict';

let express = require('express'),
  request = require('request');

let app = express();

app.get('/', function(req, res) {
  request.get({
    url: 'https://api.github.com/search/repositories?q=nodejs+language:javascript&sort=stars&order=desc',
    // Need to pass in this header while GitHub's search API is in preview-mode
    headers: {
      'Accept': 'application/vnd.github.preview',
      'User-Agent': 'sonyabe'
    }
  }, function manipulate(err, resp, body) {
    if (err)
      console.log(err);

    if (body) {
      debugger;
      body = JSON.parse(body);
      let output = '';
      for (let i = 0; i < body.items.length; i++) {
        output += "Name: " + body.items[i].name;
        output += "\nURL: " + body.items[i].html_url;
        output += "\n-----------------------------------------\n";
      }
      res.end(output);
    }
  });
});

app.listen(9090);
