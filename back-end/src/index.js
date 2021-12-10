const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("./database");

const server = express();

// PORT
server.set("port", process.env.PORT || 4000);
server.listen(server.get("port"), () => {
  console.log("Funciona en el puerto " + server.get("port"));
});

// Middlewares
server.use(morgan("dev"));
server.use(cors({ origen: "*" }));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// API's
server.use("/instructor", require("./routes/instructor.routes"));
server.use("/activity", require("./routes/activity.routes"));
