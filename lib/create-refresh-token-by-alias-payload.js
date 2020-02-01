const Token = require('./token');
const validateAccessToken = require('./validate-refresh-token');
const refreshTokenScope = require('./refresh-token-scope');

function createRefreshTokenByAliasPayload(payload) {
  payload.scope = refreshTokenScope.get();

  const token = Token.createByAliasPayload(payload);
  validateAccessToken(token);

  return token;
}

module.exports = createRefreshTokenByAliasPayload;
