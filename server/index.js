var express = require('express')
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// node_modules 에 있는 express 관련 파일을 가져온다.


// express 는 함수이므로, 반환값을 변수에 저장한다.
