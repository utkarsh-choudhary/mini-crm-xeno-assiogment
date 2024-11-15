const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

router.get('/', async (req, res) => {
    const customers = await Customer.find();
    res.json(customers);
});

router.post('/', async (req, res) => {
    const newCustomer = new Customer(req.body);
    const customer = await newCustomer.save();
    res.json(customer);
});

module.exports = router