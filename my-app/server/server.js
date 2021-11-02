const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/text", (req, res) => {
  //데이터 받는 곳
  const text1 = req.body.inText;

  let { PythonShell } = require("python-shell"); // 노드에서 파이썬 코드를 실행 시킬 수 있도록
  let options = {
    mode: "text",
    pythonPath: "",
    pythonOptions: ["-u"], // get print results in real-time
    scriptPath: "",
    args: [text1, "value2", "value3"],
  };
  PythonShell.run("my_py.py", options, function (err, results) {
    // API를 이용하여 데이터 크롤링
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log(`${text1} 정보 불러오기 완료`);
  });

  console.log(text1);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
