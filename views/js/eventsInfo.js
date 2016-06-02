app.directive('eventsInfo', function() {
    alert("hg")
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: '../layouts/eventsInfo.html' 
  }; 
});