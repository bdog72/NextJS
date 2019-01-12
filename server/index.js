const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const routes = require('../routes');

// Service
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);
const config = require('./config');
const bodyParser = require('body-parser');
const Book = require('./models/book');

const SecretData = [
  {
    title: 'SecretData 1',
    description: 'Plans how to build spaceship'
  },
  {
    title: 'SecretData 2',
    description: 'My Secret Passwords Bozo'
  }
];

mongoose
  .connect(
    config.DB_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err));

// async () =>
//   await mongoose.connect(
//     config.DB_URI,
//     { useNewUrlParser: true }
//   );

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());

    server.post('/api/v1/books', (req, res) => {
      const bookData = req.body;

      const book = new Book(bookData);

      book.save((err, createdBook) => {
        if (err) {
          return res.status(422).send(err);
        }
        return res.json(createdBook);
      });
    });

    server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
      return res.json(SecretData);
    });

    server.get(
      '/api/v1/onlysiteowner',
      authService.checkJWT,
      authService.checkRole('siteOwner'),
      (req, res) => {
        return res.json(SecretData);
      }
    );

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.use(function(err, req, res, next) {
      if (err.name === 'Unauthorized Error') {
        res
          .status(401)
          .send({ title: 'Unauthorized', detail: 'Unauthorized Access!' });
      }
    });

    server.use(handle).listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
