const client = require("../config/database.config");

module.exports.prod_list = async (req, res) => {
    try {
        client.query
        (`SELECT * FROM products ORDER BY prod_id ASC`, (error, results) =>{ //returns all products list in the database from product and ascending order

            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                 }) //Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}

module.exports.prod_listByID = (req, res) => {
    const prod_id = parseInt(req.params.prod_id)
    try{
        client.query
        (`SELECT * FROM products WHERE prod_id = $1 ORDER BY prod_id ASC`,[prod_id], (error, results) =>{ //returns  products list by id in the database from product and ascending order
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                 })//Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}

module.exports.prod_brandName = async (req, res) => {
    const brand = req.params.brand
    try{
        await client.query
        (`SELECT * FROM products WHERE brand = $1 ORDER BY prod_id ASC`,[brand], (error, results) =>{ //returns  products list by id in the database from product and ascending order
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                 })//Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}

module.exports.productExist = async (req, res) => {
    const id = parseInt(req.params.id)
    try{
        await client.query
        (`SELECT unit FROM products WHERE prod_id = $1`,[id], (error, results) =>{ //returns  products list by id in the database from product and ascending order
            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                 })//Throw the error in the terminal
            }
            res.status(200).json(results.rows) //Return a status 200 if there is no error
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}
