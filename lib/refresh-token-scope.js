let refreshTokenScope = '';

module.exports = {
  set(scope) {
    refreshTokenScope = scope;
  },
  get() {
    return refreshTokenScope;
  }
};
