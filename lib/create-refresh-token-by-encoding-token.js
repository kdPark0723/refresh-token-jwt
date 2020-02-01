const Token = require('./token');
const validateAccessToken = require('./validate-refresh-token');

function createRefreshTokenByEncodingToken(jwtString, secretOrPrivateKey, options) {
  const token = Token.createByEncodingToken(jwtString, secretOrPrivateKey, options);
  validateAccessToken(token);

  return token;
}

module.exports = createRefreshTokenByEncodingToken;
