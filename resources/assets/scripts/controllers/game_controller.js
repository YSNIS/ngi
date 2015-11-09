app.controller('GameModalController', function ($scope, $uibModalInstance, game) {

  $scope.game = game;

  console.log(game);
  
  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

});