const { Router } = require('express');
const router = Router();
const DomodedovoModel = require('../models/Domodedovo');

router.get('/hello', async (req, res)=>{
  try{
    const items = await DomodedovoModel.find({});

    res.status(200).send({
      data: items
    })
  }

  catch(err){
    res.status(500).send({ message: err });
  }
});

router.post('/post', async (req, res)=>{

  try {

    //рбота с моделью бд
    const item = await DomodedovoModel.create(req.body);

    res.status(200).send({
      item
    })
  }
  catch(err){
    res.status(500).send({ message: err });
  }
});

module.exports = router;
