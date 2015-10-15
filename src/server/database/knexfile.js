const config = require('../../shared/config');

module.exports = {

  development: config.server.database,
  production: config.server.database,

};
