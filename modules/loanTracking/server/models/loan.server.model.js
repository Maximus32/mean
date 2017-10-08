'use strict';

var mongoose = require('mongoose') ;

/**
 * Loan Schema
 */
var LoanSchema = new mongoose.Schema({
  verif_id: { type: Number,  required: true, unique: true },
  type: { type: String,  required: true }, 
  status: { type: String,  required: true },
  step: { type: String,  required: true },
  info: { type: String },
});

mongoose.model('test_loans', LoanSchema);