const Token = require('./token');
const validateAccessToken = require('./validate-refresh-token');
const refreshTokenScope = require('./refresh-token-scope');

function createRefreshTokenByPayload(payload) {
  payload.scope = refreshTokenScope.get();

  const token = Token.createByPayload(payload);
  validateAccessToken(token);

  return token;
}

module.exports = createRefreshTokenByPayload;
