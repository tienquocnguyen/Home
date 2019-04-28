const express = require("express");
const router = express.Router();
var stripe = require("stripe")("sk_test_8za51t6fg8Qbq1NjVloLB0Fp001MAiUCnj");
router.use(require("body-parser").text());


router.post('/charge', async (req,res) => {
    try {
        let {status} = await stripe.charges.create({
          amount: 20000,
          currency: "usd",
          description: "An example charge",
          source: req.body
        });
    
        res.json({status});
      } catch (err) {
        res.status(500).end();
      }
});



module.exports = router;