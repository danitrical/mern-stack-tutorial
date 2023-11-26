const express = require('express');
const db = require('./database');
const app = express();
const bodyParser = require('body-parser');
const cors  =require('cors');

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}))

app.get('/products', (req, res) => {
  const { skip, give } = req.query;
  const query =  
  `SELECT * FROM products ${give ? `LIMIT ${skip | 0} , ${give}` : '' }`;
  db.query(query)
  .then(data => {
    res.send({
      data: data[0],
      statusCode: 200,
      message: 'Products fetched successfully'
    })
  })
})

app.post('/createOrder', (req, res) => {
  const body = req.body;
  const {products, shippingAddress, paymentType} = body;
  // Validation Block
  if (!products | !products?.length) { // id, name, price
    res.status(400).send('Empty order cannot be placed')
  }
  if (!shippingAddress) res.status(400).send('PLease add shipping address');
  if (!paymentType) res.status(400).send('PLease select payment method');
  // Validation Block End

  // creating query for orders table
  const totalAmount = products.reduce((last, next) => {
    return last + next?.price;
    }, 0)

  const dateCreated = new Date().toISOString().slice(0, 19).replace('T', ' ');

  const createOrderQuery = `
    INSERT INTO orders
      (totalAmount, shippingAddress, customerId, paymentType, status, dateCreated)
    VALUES
      (${totalAmount}, '${shippingAddress}', 1, '${paymentType}', true, '${dateCreated}')`;
  // creating query for orders table ends
    
  // Creating entity in the database
  db.query(createOrderQuery).then(
    data => {
      console.log('Order created successfully');
      console.log(data[0])
      const orderId = data[0].insertId; //1
      const orderProductsData = []

      products.forEach(item => orderProductsData.push(`(${item.id}, ${orderId}, '${dateCreated}')`))

      const orderProductsQuery =
        `INSERT into orderProducts
            (productId, orderId, dateCreated)
          VALUES ${orderProductsData.toString()}`
          
          db.query(orderProductsQuery).then(item => {
            res.send({message: 'Order created successfully'})
          })
        }
      )
    })

app.listen(4000, () => console.log('Server is live at port 4000'));