const app = require('express');
const mongoose = require('mongoose');
const router = app.Router();

//Item Model
const Item = require('../../models/Item');


// @Routes GET api/items
// @desc   Get all Items
// @Access Public
router.get('/', (req, res) => {
    Item.find({})
        .then(items => {
            res.status(200).json(items);
        })
        .catch(err => res.status(500).json({ error: err }));
});



// @Routes POST api/items
// @desc   Create Item
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
        .then(resCreatedItem => {
            res.status(200).json({
                msg: 'Item Created Succesfully...',
                resCreatedItem
            });
        }).catch(err => res.status(500).json({ error: err }));
});


// @Routes DELETE api/items/:itemId
// @desc   Delete Item
// @Access Public
router.delete('/:itemId', (req, res) => {

    try {
        const itemId = mongoose.Types.ObjectId(req.params.itemId);
        Item.deleteOne({ "_id": itemId })
            .exec()
            .then(resDeleteditem => {
                res.status(200).json({ msg: 'Item Deleted Sucessfully....', resDeleteditem });
            })
    } catch (error) {
        return res.status(500).json({ error });
    }
});
module.exports = router;