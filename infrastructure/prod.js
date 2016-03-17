var _ = require('lodash')
var baseConfig = require('./base').config;
var configurator = require('./base').configurator;

var prodConfig = {
    name: 'book-inventory-kz',
    log_drains: []
};

var config = _.merge({}, baseConfig, prodConfig)
configurator(config);