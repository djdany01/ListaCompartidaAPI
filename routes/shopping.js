'use strict';

var express = require('express');
var ShoppingController = require('../controllers/shopping');
var shopping = express.Router();

shopping.post('/getlist/', ShoppingController.getList);
shopping.post('/list/', ShoppingController.newList);
shopping.post('/renamelist/', ShoppingController.editList);
shopping.post('/item/', ShoppingController.addItem);
shopping.delete('/list/', ShoppingController.delList);
shopping.delete('/item/', ShoppingController.delItem);

module.exports = shopping;
