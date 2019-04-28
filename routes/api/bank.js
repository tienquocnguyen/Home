const express = require("express");
const router = express.Router();
var stripe = require("stripe")("sk_test_8za51t6fg8Qbq1NjVloLB0Fp001MAiUCnj");
router.use(require("body-parser").text());


router.post('/charge', async (req,res) => {
    try {
        let {status} = await stripe.charges.create({
          amount: req.body.amount,
          currency: "usd",
          description: "An example charge",
          source: req.body.token
        });
        res.json({status});
      } catch (err) {
        res.status(500).end();
      }
});

router.get('/chargeByTransaction', async(req,res) => {
  try{
    stripe.balance.retrieve(async(txn_1EU0ZyEvoqFHC1GQuUdIqWcq,
      transaction) => {
        var roundUp = Math.roundUp(parseInt(transaction[0]));
        var difference = roundUp - parseInt(transaction[0]);
        let {status} = await stripe.charges.create({
          amount: difference,
          currency: "usd",
          description: "An example charge",
          source: transaction.source
        })
      res.json({status});
    })
  }catch (err){
    res.status(500).end();
  }
});


module.exports = router;