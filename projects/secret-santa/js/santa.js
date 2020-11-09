var app = angular.module("app", ['ngStorage']);

app.controller("SecretSantaController", function($scope, $localStorage){

    var uncheckedPerson = '';

    $scope.isUploaded = false;
    $scope.isRecieved = false;
    $scope.startedList = ['Зацепин', 'Зацепина', 'Падорин', 'Кочнева', 'Трошков', 'Цеков', 'Григорьева'];

    $scope.list = $localStorage.list;
    
    function randomizePerson() {
            $scope.randomNumber = Math.floor(Math.random() * $localStorage.list.length);
    }

    function checkPerson() {
        if (uncheckedPerson === $scope.user) {
            $scope.loadPerson()
        } else {
            $localStorage.list.splice($scope.randomNumber, 1);
            $scope.checkedPerson = uncheckedPerson;
        }
    }

    $scope.savePersons = function() {
        $scope.list = $localStorage.list = $scope.startedList;        
        $scope.isUploaded = true;
    }
    
    $scope.loadPerson = function() {
        randomizePerson();
        uncheckedPerson = $localStorage.list[$scope.randomNumber];    
        checkPerson();
        $scope.isRecieved = true
        }  
})