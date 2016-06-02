app.directive('eventsInfo', function() {
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/eventsInfo.html' 
  }; 
});