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

  
  global.call.insertOne(req.body, function (err, ans) {
    if (err)
      console.log(err);
    else console.log("ok")
  });
  res.end();
});

router.post('/tarrifs', function (req, res) {
  console.log(req.body)
  console.log("Тариф: " + req.body.type)
  console.log("Імя: " + req.body.name)
  console.log("Номер: " + req.body.phone)

  let data = req.body;
  global.otariff.insertOne(data, function (err, ans) {
    if (err)
      console.log(err);
    else console.log("ok")
  });
  res.end();
});

router.post('/problem', function (req, res) {

  let data = req.body;
  global.oproblem.insertOne(data, function (err, ans) {
    if (err)
      console.log(err);
    else console.log("ok")
  });
  res.end();
});

router.post('/main', function (req, res) {

  let data = req.body;
  global.main.insertOne(data, function (err, ans) {
    if (err)
      console.log(err);
    else console.log("ok")
  });
  res.end();
});

router.post('/another', function (req, res) {

  let data = req.body;
  global.another.insertOne(data, function (err, ans) {
    if (err)
      console.log(err);
    else console.log("ok")
  });
  res.end();
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
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
  data = await global.news.findOne({});

  console.log(data)
  res.send(JSON.stringify(data));
});


router.get('/a', async function (req, res) {
  let data;
  data = await global.actions.findOne({});

  console.log(data)
  res.send(JSON.stringify(data));
});

router.get('/Zbarazherr', async function (req, res) {
  let data;
  data = await global.Zbarazherr.find({}).toArray();
  console.log(data)
  res.send(JSON.stringify(data));
});

router.get('/Zbarazh', async function (req, res) {
  let data;
  data = await global.Zbarazh.find({}).toArray();

  console.log(data)
  res.send(JSON.stringify(data));
});

router.get('/Khorostkiv', async function (req, res) {
  let data;
  data = await global.Khorostkiv.find({}).toArray();

  console.log(data)
  res.send(JSON.stringify(data));
});

router.get('/Khorostkiverr', async function (req, res) {
  let data;
  data = await global.Khorostkiverr.find({}).toArray();

  console.log(data)
  res.send(JSON.stringify(data));
});

router.get('/prob', async function (req, res) {
  let data;
  data = await global.oproblem.find({}).toArray(); 
  console.log(data)
  res.send(JSON.stringify(data));
});

router.get('/tar', async function (req, res) {
  let data;
  data = await global.otariff.find({}).toArray();

  console.log(data)
  res.send(JSON.stringify(data));
});

router.post('/check-login', async function (req, res) {
  const { username, password } = req.body;

  // Здійснюємо запит до бази даних для перевірки логіну та паролю
  const user = await global.login.findOne({ username, password });

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
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
