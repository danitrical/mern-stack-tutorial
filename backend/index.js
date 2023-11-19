const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})


app.listen(4000, () => console.log('Server is live at port 4000'));