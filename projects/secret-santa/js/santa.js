var app = angular.module("app", ['ngStorage']);

app.controller("SecretSantaController", function($scope, $localStorage){
    
    function randomizePerson() {
        var max = $localStorage.list.length - 1;
        var min = 0;
        $scope.randomNumber = Math.floor(Math.random() * (max-min));
    }

    $scope.saveData = function() {
        var list = ['Zatsepin', 'Zatsepina', 'Padorin', 'Kochneva', 'Troshkov', 'Tsekov', 'Grigoryeva'];
        $localStorage.list = list;
    }
    
    $scope.loadData = function() {
        randomizePerson();
        $scope.person = $localStorage.list[$scope.randomNumber];
    }
})