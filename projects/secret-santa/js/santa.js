var app = angular.module("app", ['ngStorage']);

app.controller("SecretSantaController", function($scope, $localStorage){

    var uncheckedPerson = '';

    // заводим булки для отображения/скрытия нужных блоков на вьюхе
    $scope.isUploaded = false; 
    $scope.isRecieved = false;

    getPersonsToView();

    console.log($localStorage.personsStartedList);
    console.log($localStorage.persons);

    // сохраняем список и его неизменную копию в локальном хранилище
    $scope.savePersons = function() {
            $localStorage.persons = $scope.enteredPersonsList.trim().split(',');
            if ($localStorage.persons.length < 3) {
                alert('Введите хотя бы 3 участников.');
            } else {
                $localStorage.personsStartedList = angular.copy($scope.enteredPersonsList.trim().split(','));
                $scope.isUploaded = true;
                getPersonsToView(); 
            }             
    }
    
    // отображаем рандомного участника на вьюхе, проверив, что это не текущий пользователь
    $scope.loadPerson = function() {
        getUncheckedPerson();
        checkPerson();     
        $scope.isRecieved = true;
        } 
        
    // для корректного отображения блоков на вьюхе нужно дублировать код, поэтому вынес его в отдельную ф-ию 
    function getPersonsToView() {
        $scope.persons = $localStorage.persons;
        $scope.personsStartedList = $localStorage.personsStartedList;
    }

    function getUncheckedPerson() {
        $scope.randomPersonIndex = Math.floor(Math.random() * $localStorage.persons.length);
        uncheckedPerson = $localStorage.persons[$scope.randomPersonIndex].trim();  
    }

    function checkPerson() {
        if (uncheckedPerson === $scope.user) {
            getUncheckedPerson();
        } else {
            $localStorage.persons.splice($scope.randomPersonIndex, 1);
            $scope.checkedPerson = uncheckedPerson;
        }
    }
})