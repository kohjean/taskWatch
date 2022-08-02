module.exports = (req, res, next) => {
  const jwt = require('jsonwebtoken');
  const authHeader = req.headers['authorization'];
  if (authHeader !== undefined) {
    if (authHeader.split(' ')[0] === 'Bearer') {
      try {
        const token = jwt.verify(
          authHeader.split(' ')[1],
          process.env.API_SIGNATURE
        );
        if (token.name === '2st man' && Date.now() < token.exp * 1000) {
          next();
        } else {
          res.json({ message: 'unauthorized' });
        }
      } catch (err) {
        res.json({ message: err.message });
      }
    } else {
      res.json({ message: 'header format error' });
    }
  } else {
    res.json({ message: 'header error' });
  }
};
