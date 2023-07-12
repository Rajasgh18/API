const Router = require('express').Router();
const Model = require('../models/Model');

Router
    //Create
    .post('/', async (req, res) => {
        try {
            const data = await new Model(req.body);
            const newData = await data.save();
            res.status(200).json(newData);
        } catch (error) {
            res.status(500).json(error.message);
        }
    })
    //Get
    .get('/:id', async (req, res) => {
        try {
            const data = await Model.findById(req.params.id);
            if (!data) return res.status(404).send("No Data with this id!");
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error.message);
        }
    })
    //Update
    .put('/:id', async (req, res) => {
        try {
            let data = await Model.findById(req.params.id);
            if (!data) return res.status(404).send("No Data with this id!");
            data = await Model.findByIdAndUpdate(req.params.id, { $set: req.body })
            await data.save();
            res.status(200).send("Data Updated Successfully!");
        } catch (error) {
            res.status(500).json(error.message);
        }
    })
    //Delete
    .delete('/:id', async (req, res) => {
        try {
            let data = await Model.findById(req.params.id);
            if (!data) return res.status(404).send("No Data with this id!");
            data = await Model.findByIdAndDelete(req.params.id);
            res.status(200).send("Successfully deleted!");
        } catch (error) {
            res.status(500).json(error.message);
        }
    })


module.exports = Router;