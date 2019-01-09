const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://bozo72.auth0.com/.well-known/jwks.json'
  }),
  audience: 'hlcgDvFQ4F0rucG4g2LQ5pR0mJCRiptz',
  issuer: 'https://bozo72.auth0.com/',
  algorithms: ['RS256']
});
