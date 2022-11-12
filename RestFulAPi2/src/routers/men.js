const express = require('express');
const MensRanking = require("../models/mens");

const router = new express.Router();
//we will handle post req
router.post('/mens', async (req, res) => {
    try {
        const record = new MensRanking(req.body)
        console.log(req.body);
        const showRecord = await record.save();
        res.status(201).send(showRecord);
    } catch (err) {
        res.status(400).send(err);
    }
})

//we will handle get request
router.get('/mens', async (req, res) => {
    try {
        const showRecord = await MensRanking.find({}).sort({ ranking: 1 });
        res.send(showRecord);
    } catch (err) {
        res.status(400).send(err);
    }
})

//we will handle single get request
router.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const showsingleRecord = await MensRanking.findById(_id);
        res.send(showsingleRecord);
    } catch (err) {
        res.status(400).send(err);
    }
})

//update individual
router.patch('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const showsingleRecord = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(showsingleRecord);
    } catch (err) {
        res.status(500).send(err);
    }
})

//delete individual
router.delete('/mens/:id', async (req, res) => {
    try {
        const deletingRecord = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(deletingRecord);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;