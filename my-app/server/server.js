const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/db");
const bodyParser = require("body-parser");

//app.use("/api", db);

app.get("/api/dataReqTent", (req, res) => {
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
app.get("/api/dataReqSleep", (req, res) => {
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
app.get("/api/dataReqBrazier", (req, res) => {
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
app.get("/api/dataReqCop", (req, res) => {
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

app.get("/api/dataReqTarp", (req, res) => {
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
app.get("/api/dataReqBurner", (req, res) => {
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
// app.get("/doJoin", (req, res) => {
//   db.query("INSERT INTO test (test_body) values (?)",[test],
//     function(err,rows,fields){
//         if(err){
//             console.log("실패");
//             // console.log(err);
//         }else{
//             console.log("성공");
//             // console.log(rows);
//         };
// });

app.get("/", (req, res) => {
  res.send({ host: "seon" });
  console.log("hi");
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
