import express from "express";
import { StatusCodes } from "http-status-codes";


const app = express();
const PORT = 3000;
const STATUS = {
  SUCCESS: "success",
  ERROR: "error",
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/add", (req, res) => {
  const data = [];
  data.push(req.body);
  res.status(StatusCodes.CREATED).send({
    status: STATUS.SUCCESS,
    data,
  });

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});