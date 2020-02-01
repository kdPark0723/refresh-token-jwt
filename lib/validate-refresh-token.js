const assert = require('assert');
const assertNotNullAndUndefined = require('./assert-not-null-and-undefined-many');
const refreshTokenScope = require('./refresh-token-scope');

function validateRefreshToken(token) {
  assertNotNullAndUndefined(
    token.sub,
    token.iss,
    token.cid,
    token.iat,
    token.exp,
  );

  assert.equal(token.scope, refreshTokenScope.get());
}

module.exports = validateRefreshToken;
