const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use(morgan("combined"));
app.use(cors());


app.delete('/*', function (req, res) {
    res.status(200).send({message:"Deleted Successfully", data: req.query.id})
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

process.on('uncaughtException', function (err, req, res, next) {
  console.log('Node Server startup Error', err);
});

module.exports = app;