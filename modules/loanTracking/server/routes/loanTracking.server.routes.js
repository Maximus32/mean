'use strict';

/**
 * Module dependencies
 */
var loans = require('../controllers/loanTracking.server.controller');

module.exports = function (app) {
  // Loans collection routes
  app.route('/api/loans')
    .get(loans.list)
    .post(loans.create) ;
};
