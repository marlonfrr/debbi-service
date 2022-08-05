const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");

// const {
//   logErrors,
//   errorHandler,
//   boomErrorHandler,
//   ormErrorHandler,
// } = require("./middlewares/error.handler");
// const { checkApiKey } = require("./middlewares/auth.handler");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// const whitelist = ["http://localhost:8080", "https://myapp.co"];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("no permitido"));
//     }
//   },
// };
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello I'm debbi");
});

routerApi(app);

// app.use(logErrors);
// app.use(ormErrorHandler);
// app.use(boomErrorHandler);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
