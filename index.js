const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 1234;

app.use(cors())

app.get('/', (req, res) => {
  res.json({
    'DB_APIKEY': process.env.DB_APIKEY,
    'DB_DOMAIN': process.env.DB_AUTHDOMAIN,
    'DB_DATABASE': process.env.DB_DATABASEURL,
    'DB_PROJECT': process.env.DB_PROJECTID,
    'DB_BUCKET': process.env.DB_STORAGEBUCKET,
    'DB_SENDER': process.env.DB_MESSAGEINGSENDERID,
    'DB_APP': process.env.DB_APPID,
    'DB_MEASUREMENT': process.env.DB_MEASUREMENTID
  });
});

  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})