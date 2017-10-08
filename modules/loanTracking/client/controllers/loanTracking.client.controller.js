(function () {
  'use strict';
  
  angular
    .module('loanTracking')
    .controller('LoanTrackingController', LoanTrackingController) ;
  
  LoanTrackingController.$inject = ['$scope', 'Service_LoanTracking'] ;
  
  function LoanTrackingController($scope, Service_LoanTracking) {
    var vm = this ;
    
    console.log("TEST A\n") ;
    
    //vm.loans = Service_LoanTracking.query() ;
    
    vm.query_all_client = query_all_client ;
    vm.test = test ;
    
    // Queries all loans belonging to this client, saving them to the scope
    function query_all_client() {
      console.log("TEST B\n") ;
      
      Service_LoanTracking.find_all() ;
    }
    
    // Test function
    function test() {
      console.log("This is a test...") ;
      
      query_all_client() ;
    }
  }
}());
