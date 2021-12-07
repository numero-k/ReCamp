const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/db");
const bodyParser = require("body-parser");

//app.use("/api", db);

<<<<<<< HEAD
app.get("/api/dataReqTent", (req, res) => {
  db.query(
    "SELECT * FROM review WHERE KeyValue='tent'",
=======
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/doJoin", (req, res) => {
  console.log(req.body);
  const id = req.body.loginId;
  const pwd = req.body.loginPw;
  const name = req.body.name;
  const email = req.body.email;
  db.query(
    "insert into member (id, pwd, name, email) values (?,?,?,?)",
    [id, pwd, name, email],
>>>>>>> e973905a58aaafa8367fcfcd7d754cd77a263794
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        console.log(err);
      } else {
        console.log("성공");
<<<<<<< HEAD
        res.send(rows);
        //console.log(rows[0]);
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
=======
        // console.log(rows);
>>>>>>> e973905a58aaafa8367fcfcd7d754cd77a263794
      }
    }
  );
});
<<<<<<< HEAD
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
=======
>>>>>>> e973905a58aaafa8367fcfcd7d754cd77a263794

app.get("/", (req, res) => {
  res.send({ host: "seon" });
  console.log("hi");
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});