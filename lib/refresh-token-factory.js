const createRefreshTokenByPayload = require('./create-refresh-token-by-payload');
const createRefreshTokenByAliasPayload = require('./create-refresh-token-by-alias-payload');
const createRefreshTokenByEncodingToken = require('./create-refresh-token-by-encoding-token');

module.exports = {
  createByPayload: createRefreshTokenByPayload,
  createByAliasPayload: createRefreshTokenByAliasPayload,
  createByEncodingToken: createRefreshTokenByEncodingToken,
};
