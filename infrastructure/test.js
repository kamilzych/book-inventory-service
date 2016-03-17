var _ = require('lodash')
var baseConfig = require('./base').config;
var configurator = require('./base').configurator;

var testConfig = {
    name: 'book-inventory-kz-test',
    log_drains: []
};

var config = _.merge({}, baseConfig, testConfig);
configurator(config);