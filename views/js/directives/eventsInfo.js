app.directive('eventsInfo', function() {
      console.log("SDDDDDD");
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: './js/directives/eventsInfo.handlebars' 
  }; 
});