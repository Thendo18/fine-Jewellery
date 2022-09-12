const express = require("express");
const router = express.Router();

const list = require('../controllers/productlist');

router.get("/product_list", list.prod_list);
router.get('/productbyid/:prod_id', list.prod_listByID);
router.get('/prod_brand/:brand', list.prod_brandName);
router.get('/stock/:id',list.productExist);

module.exports = router;
