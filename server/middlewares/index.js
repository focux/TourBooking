const errorCodes = require('../config/errorCodes');

const authCheck = (req, res, next) => {
  if (!req.user) {
    const errorObj = {
      data: {
        errorCode: errorCodes.NOTAUTHENTICATED.code,
        errorMessage: errorCodes.NOTAUTHENTICATED.message
      }
    };
    res.status(401).send(errorObj);
  } else {
    next();
  }
};

module.exports = { authCheck };
