'use strict';
let _ = require('lodash');
let path = require('path');

const BASE_PATH = './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/';

exports.loadVariables = () => {
  return path.join(BASE_PATH, '_variables.scss');
};

exports.loadMixins = (mixins) => {
  return _.map(mixins, (mixin) => {
    return path.join(BASE_PATH, 'mixins', `_${mixin}.scss`);
  });
};
