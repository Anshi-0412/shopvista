const express = require('express');
const router = express.Router();
const { Product, Seller } = require('../model');

// Product Routes
// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific product
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Seller Routes
// Get all sellers
router.get('/sellers', async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.json(sellers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific seller
router.get('/sellers/:id', async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (seller == null) {
      return res.status(404).json({ message: 'Seller not found' });
    }
    res.json(seller);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
