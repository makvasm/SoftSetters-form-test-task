const express = require('express');
const app = express();
const ROOT = __dirname + '/public';
const PORT = process.env.PORT || 3000;
const multer = require('multer');
const upload = multer();

app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile(ROOT + '/index.html');
});

app.post('/api/mail', upload.none(), (req, res) => {
  if(!req.body.mailer || !req.body.receiver || !req.body.text) return res.status(400).send();
  res.status(200).send();
});

app.listen(PORT, () => console.log(`Сервер запущен - http://localhost:${PORT}`));