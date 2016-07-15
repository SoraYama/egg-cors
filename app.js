'use strict';

/**
 * Module dependencies.
 */

module.exports = function(app) {
  // put before other core middlewares
  app.config.coreMiddlewares.unshift('cors');

  // if security plugin enabled, only allow safe domain support CORS.
  app.config.cors.origin = function(ctx) {
    const origin = ctx.get('Origin');
    if (!ctx.isSafeDomain || ctx.isSafeDomain(origin)) {
      return origin;
    }
    return '';
  };
};
