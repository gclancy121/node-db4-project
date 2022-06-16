const express = require('express');


const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({message: "i'm hooked up!"});
})

module.exports = router;