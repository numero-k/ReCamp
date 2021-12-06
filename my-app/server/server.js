const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/db");
const bodyParser = require("body-parser");

//app.use("/api", db);

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
    function (err, rows, fields) {
      if (err) {
        console.log("실패");
        console.log(err);
      } else {
        console.log("성공");
        // console.log(rows);
      }
    }
  );
});

app.get("/", (req, res) => {
  res.send({ host: "seon" });
  console.log("hi");
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});