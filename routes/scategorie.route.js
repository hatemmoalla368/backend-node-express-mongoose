var express = require('express');
var router = express.Router();

const scategorie = require('../models/scategorie');

router.get('/', async (req, res, )=> {
    try{
        const scat = await scategorie.find().populate("categorieID");
        res.status(200).json(scat);

    } catch(error){
        res.status(404).json({ message: error.message });

    }
});

router.get('/:scategorieID', async (req, res, )=> {
    try{
        const scat = await scategorie.findById(req.params.scategorieID).populate("categorieID")
        res.status(200).json(scat);

    } catch(error){
        res.status(404).json({ message: error.message });
        

    }
});

router.post('/', async (req, res, )=> {
    const newscat = new scategorie(req.body)
    try{
        await newscat.save()
        res.status(200).json(newscat);

    } catch(error){
        res.status(404).json({ message: error.message });
        

    }
});
router.put('/:scategorieID', async (req, res, )=> {
    try{
        const scat = await scategorie.findByIdAndUpdate(
            req.params.scategorieID,
            { $set: req.body },
            { new: true }
            );
            
        res.status(200).json(scat);

    } catch(error){
        res.status(404).json({ message: error.message });
        

    }
});

router.delete('/:scategorieID', async (req, res, )=> {
    const scat = req.params.scategorieID
    try{
        await scategorie.findByIdAndDelete(scat)
        res.json({message : "scategorie deleted successfully"})

    } catch(error){
        res.status(404).json({ message: error.message });
        

    }
});

module.exports = router;