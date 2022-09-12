const express = require("express");
const client = require("../config/database.config");
const app = express.Router();

module.exports.getAllOrders = async (req, res) => {
    const id = parseInt(req.params.id); 
    try{
        client.query
        (`SELECT orders.orderid, orders.user_id, orders.address, orders.city, orders.town, 
        orders.zip, orders.delivery_price, orders.totalcost, orders.orderdate, 
        orderitems.product_id, orderitems.quantity, products.prod_name, products.image
        FROM orders
        INNER JOIN users  ON orders.user_id = users.id 
        INNER JOIN orderitems ON orderitems.orderid=orders.orderid
        INNER JOIN products ON products.prod_id=orderitems.product_id
        WHERE users.id = $1 
        ORDER BY orderid ASC`,[id], (error, results) =>{ //returns all orders  in the database from product list and ascending order

            if(error){ //checks for errors and return them 
                return res.status(400).json({
                    error: "Database error"
                })//Throw t //Throw the error in the terminal
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

module.exports.addorder = async (req, res) => {
    const id = parseInt(req.params.id); 
    const {address, city, town, zip, delivery_price, totalcost} = req.body

    try{  
        await client.query(`
            INSERT INTO orders (user_id, address, city, town, zip, delivery_price, totalcost) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING orderid`, 
            [id, address, city, town, zip, delivery_price, totalcost], (error, results) => {
                if(error){ //checks for errors and return them 
                    return res.status(400).json({
                        error: "Database error"
                    })//Throw t //Throw the error in the terminal
                }
                res.status(200).json(results.rows[0].orderid) //Return a status 200 if there is no error
            }
        )
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
    };
}

module.exports.addIterms = async (req, res) => {
    
    const orderid = parseInt(req.params.orderid); 
    const {product_id, actualprice, quantity} = req.body

    try{  
        client.query(`
            INSERT INTO orderitems (orderid, product_id, actualprice, quantity) 
            VALUES ($1, $2, $3, $4)`, [orderid, product_id, actualprice, quantity], (error, results) => {
                if(error){ //checks for errors and return them 
                    return res.status(400).json({
                        error: "Database error"
                    })//Throw t //Throw the error in the terminal
                }
                res.status(200).json(results.rows) //Return a status 200 if there is no error
            }
        )
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}


module.exports.DeleteAll = async (req, res) => {
    try{  
        client.query(`alter table orderItems nocheck constraint all
                        delete from orders
                    alter table orderItems check constraint all`, (error, results) => {
                if(error){ //checks for errors and return them 
                    return res.status(400).json({
                        error: "Database error"
                    })//Throw t //Throw the error in the terminal
                }
                res.status(200).json(results.rows) //Return a status 200 if there is no error
            }
        )
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
     };
}


module.exports.userProfile = async (req, res, next) => {
    try{  
        await client.query(`SELECT * FROM users`, (error, results) => {
                if(error){ 
                    return next(error)
                }
                res.status(200).json(results.rows) //Return a status 200 if there is no error
            }
        )
    }
    catch (err) {
        res.status(500).json({
           error: "Database error while retrieving products", 
        });
    };
}
