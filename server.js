const fastify = require("fastify");
const path = require("path");
const app = fastify();
const autoLoad = require("@fastify/autoload");
const { join } = require("path");
// const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
// const userRouter = require("./api/users/user.router")
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
// app.post("/register",(req,res)=>{

// })
app.register(autoLoad, {
  dir: join(__dirname, "routes"),
  dirNameRoutePrefix: false,
  options: { prefix: "/api/v1" },
});

const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
  console.log(`Server starts at ${PORT}`);
});
// var db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// db.connect((error) =>{
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("Connected.................................")
//     }
// });

// db.end();
