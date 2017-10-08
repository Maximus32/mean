 'use strict';

// Dependencies
var path = require('path'),
  mongoose = require('mongoose'),
  Loan = mongoose.model('test_loans') ;

/**
 * Create a Loan
 */
exports.create = function (req, res) {
  var loan = new Loan() ;
  
  loan.save(function (err) {
    if (err) {
      return res.status(422) ;
    } else { res.json(loan) ; }
  });
};

/**
 * Show the current Loan
 */
exports.read = function (req, res) {
  // convert mongoose document to JSON
  var loan = req.loan ? req.loan.toJSON() : {};
  
  res.json(loan);
};

/**
 * List of Loans
 */
exports.list = function (req, res) {
  Loan.find({}, function(err, loans) {
    if (err) throw err ;
    
    res.json(loans) ;
  }) ;
} ;