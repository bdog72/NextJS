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

const bookRoutes = require('./routes/book');
const portfolioRoutes = require('./routes/portfolio');
const blogRoutes = require('./routes/blog');

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

    server.use('/api/v1/books', bookRoutes);
    server.use('/api/v1/portfolios', portfolioRoutes);
    server.use('/api/v1/blogs', blogRoutes);

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

// server.post('/api/v1/books', (req, res) => {
//   const bookData = req.body;

//   const book = new Book(bookData);

//   book.save((err, createdBook) => {
//     if (err) {
//       return res.status(422).send(err);
//     }
//     return res.json(createdBook);
//   });
// });

// server.get('/api/v1/books', (req, res) => {
//   Book.find({}, (err, allBooks) => {
//     if (err) {
//       return res.status(422).send(err);
//     }

//     return res.json(allBooks);
//   });
// });

// server.patch('/api/v1/books/:id', (req, res) => {
//   const bookId = req.params.id;
//   const bookData = req.body;

//   Book.findById(bookId, (err, foundBook) => {
//     if (err) {
//       return res.status(422).send(err);
//     }
//     foundBook.set(bookData);
//     foundBook.save((err, savedBook) => {
//       if (err) {
//         return res.status(422).send(err);
//       }
//       return res.json(foundBook);
//     });
//   });
// });

// server.delete('/api/v1/books/:id', (req, res) => {
//   const bookId = req.params.id;

//   Book.deleteOne({ _id: bookId }, (err, deletedBook) => {
//     if (err) {
//       return res.status(422).send(err);
//     }
//     return res.json({ status: 'DELETED' });
//   });
// });
