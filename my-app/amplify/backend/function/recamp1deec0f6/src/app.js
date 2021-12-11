/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

const mysql = require("mysql");

const db = mysql.createPool({
  host: "52.14.145.195",
  port: "3306",
  user: "seon",
  password: "1234",
  database: "review",
});

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/items/dataReqTent", (req, res) => {
  db.query(
    "SELECT * FROM review WHERE KeyValue='tent'",

    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        console.log(err);
      } else {
        console.log("성공");

        res.send(rows);
        console.log(rows[0]);
      }
    }
  );
});
app.get("/items/dataReqSleep", (req, res) => {
  db.query(
    "SELECT * FROM review WHERE KeyValue='sleepingBag'",
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        console.log(err);
      } else {
        console.log("성공");
        res.send(rows);
        //console.log(rows[0]);
      }
    }
  );
});
app.get("/items/dataReqBrazier", (req, res) => {
  db.query(
    "SELECT * FROM review WHERE KeyValue='brazier'",
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        console.log(err);
      } else {
        console.log("성공");
        res.send(rows);
        //console.log(rows[0]);
      }
    }
  );
});
app.get("/items/dataReqCop", (req, res) => {
  db.query(
    "SELECT * FROM review WHERE KeyValue='coppell'",
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        console.log(err);
      } else {
        console.log("성공");
        res.send(rows);
        //console.log(rows[0]);

        // console.log(rows);
      }
    }
  );
});

app.get("/items/dataReqTarp", (req, res) => {
  db.query(
    "SELECT * FROM review WHERE KeyValue='tarp'",
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        console.log(err);
      } else {
        console.log("성공");
        res.send(rows);
        //console.log(rows[0]);
      }
    }
  );
});
app.get("/items/dataReqBurner", (req, res) => {
  db.query(
    "SELECT * FROM review WHERE KeyValue='burner'",
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        console.log(err);
      } else {
        console.log("성공");
        res.send(rows);
        //console.log(rows[0]);
      }
    }
  );
});

/**********************
 * Example get method *
 **********************/

app.get("/items", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

app.get("/items/*", function (req, res) {
  // Add your code here
  res.json({ success: "get call succeed!", url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post("/items", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.post("/items/*", function (req, res) {
  // Add your code here
  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put("/items", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/items/*", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete("/items", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.delete("/items/*", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
