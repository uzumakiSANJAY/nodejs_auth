const {createUser} = require("./user.controller");
// const fastify = require("fastify")
// const app = fastify();
const router = require("fastify").Router();


router.post("/",createUser)
module.exports = router;

// app.get("/api",(req,res) =>{
//     res.json({
//         success:1,
//         message : "This is rest apis working"
//     });
// });

// app.listen(process.env.PORT,()=>{
//     console.log("Server up running on PORT :", process.env.PORT); 
// });