var express= require('express')
var router=express.Router();

router.get('/',(req,res)=>{

  var data = {
    name : 'alamin',
    id: '1234'
  };

  res.render('abc',data)
});

module.exports = router;
