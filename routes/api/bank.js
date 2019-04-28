const express = require("express");
const router = express.Router();
var stripe = require("stripe")("sk_test_8za51t6fg8Qbq1NjVloLB0Fp001MAiUCnj");
router.use(require("body-parser").text());


router.get('/charge', async (req,res) => {
   var email = req.query.email;
   var password = req.query.password1;
   console.log(req.query.email);
   res.send({email, password}) 
  // try {
    //     let {status} = await stripe.charges.create({
    //       amount: req.amount,
    //       currency: "usd",
    //       description: "An example charge",
    //       source: req.body
    //     });
    
    //     res.json({status});
    //   } catch (err) {
    //     res.status(500).end();
    //   }
});



module.exports = router;