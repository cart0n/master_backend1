var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res) {
  let data = { a: 1 }
  global.news.insertOne(data, function (err, ans) {

  });
  res.render('index', { title: 'Express' });
});

router.post('/u', function (req, res) {
  console.log(req.body)
  console.log("Імя: " + req.body.name)
  console.log("Номер: " + req.body.phone)

  let data = req.body;
  global.call.insertOne(data, function (err, ans) {
    if (err)
      console.log(err);
    else console.log("ok")
  });
  res.end();
});

router.get('/z', async function (req, res) {
  let data;

  // global.tariff.insertOne(data, function (err, ans) {
  //   if (err)
  //   console.log(err);
  //   else console.log("ok")
  // });

  data = await global.tariff.findOne({});

  console.log(data)
  res.send(JSON.stringify(data));
});


router.get('/n', async function (req, res) {
  let data;

  // global.tariff.insertOne(data, function (err, ans) {
  //   if (err)
  //   console.log(err);
  //   else console.log("ok")
  // });

  data = await global.news.findOne({});

  console.log(data)
  res.send(JSON.stringify(data));
});


// app.post('/create-reminder', addon.checkValidToken(),
//   async (req, res) => {
//     let data = {
//       a: req.body
//     }

//     global.reminders.insertOne(data, function (err, ans) {
//       if (err) {
//         res.status(400).end();
//       }
//       res.status(200).end();
//     });
//   })


module.exports = router;
