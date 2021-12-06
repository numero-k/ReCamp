const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/db");

//app.use("/api", db);

app.get("/doJoin", (req, res) => {
  db.query("INSERT INTO test (test_body) values (?)",[test],
    function(err,rows,fields){
        if(err){
            console.log("실패");
            // console.log(err);
        }else{
            console.log("성공");
            // console.log(rows);
        };
});

app.get("/", (req, res) => {
  res.send({ host: "seon" });
  console.log("hi");
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
