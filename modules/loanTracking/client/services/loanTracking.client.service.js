(function () {
  'use strict';

  angular
    .module('loanTracking.services')
    .factory('Service_LoanTracking', Service_LoanTracking);
    
  function Service_LoanTracking() {
    
    function find_all() {
      console.log("Um... Finding all loans?") ;
      
      test_loans.find({}, function(err, loans) {
        if (err) throw err ;
        
        console.log("TEST C\n") ;
        console.log(loans) ;
        
        vm.loans = loans ;
      }) ;
    }
    
    return null ;
    
  }
}());
