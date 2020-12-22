
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('*', (req, res) => {
  console.log('\n********************');
  console.log(`REQUEST: ${req.method} ${req.originalUrl}`);
  console.log(`BODY:`);
  console.log(req.body);
  console.log('********************');

  res.status(201).send({ status:'ok' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
