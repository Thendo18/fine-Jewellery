const express = require("express");
const router = express.Router();

const orders = require('../controllers/order.controller');
const usercontroller = require('../middlewares/userController')
//Get all orders

router.get("/order_list/:id", orders.getAllOrders);
router.post("/add_list/:id", orders.addorder);
router.post("/add_items/:orderid", orders.addIterms);
router.get('/profile', usercontroller, orders.userProfile);
router.delete("/delete", orders.DeleteAll);


module.exports = router;
