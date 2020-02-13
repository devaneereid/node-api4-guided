require('dotenv').config();

const server = require('./api/server.js');

// server.use(express.json());

server.get('/', (req, res) => {
  const quotes = [{
    id: 1,
    quote: "The way to get started is to quit talking and begin doing. -Walt Disney",
    secret: process.env.SECRET
  }];
    // res.status(200).json(quotes)
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
