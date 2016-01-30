angular.module('ToDo', []).
controller('todoController', ['$scope', function($scope) {
  $scope.todos = JSON.parse(localStorage.getItem('done')) || [];
  $scope.doneToDos = [];

  $scope.addTodo = function() {
    $scope.todos.push({
      'title': $scope.newTodo,
      'done': false
    })
    $scope.newTodo = '';
  }
  $scope.clearAll = function() {
    $scope.doneToDos = [];
  }

  $scope.$watch('todos', function(newValue, oldValue) {
    if (newValue != oldValue) {
      localStorage.setItem('done', JSON.stringify(newValue))
    }
  }, true)


  $scope.putDone = function(index) {
    $scope.doneToDos.push($scope.todos[index]);

    $scope.todos.splice(index, 1);
  };

  $scope.putNotDone = function(index) {
    $scope.todos.push($scope.doneToDos[index]);

    $scope.doneToDos.splice(index, 1);
  };


}]);