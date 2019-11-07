const express = require('express');
const Foods = require('../models/Foods');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'HELLO' });
});

router.get('/foods', async (req, res) => {
    try {
        const foodList = await Foods.find();
        res.status(200).json({ foodList });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/foods/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const food = await Foods.findById(id);
        res.status(200).json({ food });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// POST to create a new food
router.post('/new-food', async (req, res) => {
    try {
        const { body } = req;
        const newFood = new Foods(body);

        await newFood.save(newFood);        
        res.status(200).json({ message: 'success: created food'})
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// PUT to update
router.put('/foods/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        await Foods.findByIdAndUpdate(id, body);        
        res.status(200).json({ message: 'success: updated food'})
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE 
router.delete('/foods/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await Foods.findByIdAndDelete(id);        
        res.status(200).json({ message: 'success: deleted food'})
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;