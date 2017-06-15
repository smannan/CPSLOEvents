var app = angular.module('MainApp', [
   'ngMaterial',
   'ui.router',
   'ui.bootstrap'
]);

app.constant("errMap", {
   missingField: 'Field missing from request: ',
   badValue: 'Field has bad value: ',
   notFound: 'Entity not present in DB.',
   badLogin: 'Email/password combination invalid.',
   dupEmail: 'Email duplicates an existing email.',
   noTerms: 'Acceptance of terms is required.',
   noOldPwd: 'Change of password requires an old password.',
   oldPwdMismatch: 'Old password that was provided is incorrect.',
   dupTitle: 'Conversation title duplicates an existing one.',
   dupEnrollment: 'Duplicate enrollment.',
   forbiddenField: 'Field in body not allowed.',
   forbiddenRole: 'Role specified is not permitted.',
   queryFailed: 'Query failed (server problem).'
});

app.filter('tagError', ['errMap'/*, 'errLangCode'*/, 
 function(errMap, /*errLangCode*/) {
   return function(err) {
      return /*errLangCode.chosenCode + " " + */errMap[err.tag] + " " + 
       (err.params ? err.params[0] : "");
   };
}]);

app.directive('evtSummary', [function() {
   return {
      restrict: 'E',
      scope: {
         evt: "=toSummarize",
         editCnv: '&',
         delCnv: '&',
         checkUsr: '='
      },
      template: '<a href="#" ui-sref="evtDetail({evtId: {{evt.id}} })"> ' +
       '{{evt.title}} {{evt.lastMessage | date : "medium"}}</a> '
   };
}]);

app.directive('evtDetail', [function() {
   return {
      restrict: 'E',
      scope: {
         evt: '='
      },
      template: '<div style="background-color:rgba(33, 150, 243, .5);">' + 
      '{{msg.whenMade | date : "medium"}} by ' + 
      '{{msg.email}}</div><br/>{{msg.content}}'
   };
}]);
/*
app.service("errLangCode", [function() {
   this.chosenCode = "[EN]";
}]);

app.controller("langDropController", ["$scope", "errLangCode",
 function($scope, errLangCode) {
    var codes = { en: "[EN]", es: "[ES]"};
    var englishArr = ["English", "Ingles"];
    var spanishArr = ["Spanish", "Espanol"];
    
    // Helper function to change dropdown menu
    modifyDrop = function(code, langArr, selected) {
       errLangCode.chosenCode = code;
       $scope.languages = langArr;
       $scope.selectedLang = selected;
    }
    
    // Default selection
    modifyDrop(codes.en, ["English", "Spanish"], "English"); 
   
    $scope.changeLang = function(selectedLang) {
       
       if (englishArr.indexOf(selectedLang) > -1) {
         modifyDrop(codes.en, ["English", "Spanish"], "English");
       }
       else if (spanishArr.indexOf(selectedLang) > -1) {
         modifyDrop(codes.es, ["Ingles", "Espanol"], "Espanol");
       }
    }
}]); */

