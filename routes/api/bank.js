const express = require("express");
const router = express.Router();
var stripe = require("stripe")("sk_test_8za51t6fg8Qbq1NjVloLB0Fp001MAiUCnj");
router.use(require("body-parser").text());



router.post('/charge', async (req,res) => {
    try {
        let {status} = await stripe.charges.create({
          amount: req.body.amount,
          currency: "usd",
          description: "Direct Donation",
          source: req.body.token
        });
        res.json({status});
      } catch (err) {
        res.status(500).end();
      }
});

router.get('/chargeByTransactions', async(req,res) => {
  try{
    stripe.balance.listTransactions({limit: 10}, function (err, transactions) {
        var sum = 0;
        transactions.forEach(function(element){
            var roundUp = ((parseInt(element))/100).roundUp();
            var difference = roundUp - ((parseInt(element))/100);
            difference = difference * 100;
            sum += difference;
        })
        let {status} = await stripe.charges.create({
          amount: sum,
          currency: "usd",
          description: "Donation by Transactions",
          source: req.body
        })

      res.json({status});
    })
  }catch (err){
    res.status(500).end();
  }
});


module.exports = router;