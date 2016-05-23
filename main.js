var merge = require('merge-recursive');

module.exports = function (location) {
  var cfg = require(location);
  var module = cfg.default;
  var ENV = process.env.NODE_ENV || 'development';

  try {
    module = merge.recursive(module, cfg[ENV]);
  } catch(e) {
    console.error('Environment specific settings not found: %s', ENV);
  }

  module.env = module.environment = module.ENV = ENV;

  return module;
};
