const pool = require ("../../config/database");
const { v4: uuidv4 } = require("uuid");
const genUuid = uuidv4();
module.exports ={
    create : (data,callBack) =>{
        pool.query(
            `INSERT INTO user (id , name , email , password , pic) VALUES(? ,?,?,?,?)`,
            [
                genUuid,
                data.name,
                data.email,
                data.password,
                data.pic
            ],
            (error,results,fields) =>{
                if(error){
                    return callBack(error)
                }
                return callBack(null,results)
            }
        )
    }
}