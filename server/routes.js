'use strict';
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');

module.exports = function(controllers) {
  router.use(bodyparser());
  router.get('/', controllers.verify);
  router.post('/', controllers.react);
  return router.routes();
};
