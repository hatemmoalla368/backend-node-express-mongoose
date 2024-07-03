var express = require('express');
var router = express.Router();

const article = require('../models/article');

router.get('/', async (req, res, )=> {
    try{
        const art = await article.find().populate("scategorieID");
        res.status(200).json(art);

    } catch(error){
        res.status(404).json({ message: error.message });

    }
});

router.get('/:articleID', async (req, res, )=> {
    try{
        const art = await article.findById(req.params.articleID).populate("scategorieID")
        res.status(200).json(art);

    } catch(error){
        res.status(404).json({ message: error.message });
        

    }
});

router.post('/', async (req, res, )=> {
    const newarticle = new article(req.body)
    try{
        await newarticle.save()
        res.status(200).json(newarticle);

    } catch(error){
        res.status(404).json({ message: error.message });
        

    }
});
router.put('/:articleID', async (req, res, )=> {
    try{
        const art = await article.findByIdAndUpdate(
            req.params.articleID,
            { $set: req.body },
            { new: true }
            );
            
        res.status(200).json(art);

    } catch(error){
        res.status(404).json({ message: error.message });
        

    }
});

router.delete('/:articleID', async (req, res, )=> {
    const art = req.params.articleID
    try{
        await article.findByIdAndDelete(art)
        res.json({message : "article deleted successfully"})

    } catch(error){
        res.status(404).json({ message: error.message });
        

    }
});

module.exports = router;