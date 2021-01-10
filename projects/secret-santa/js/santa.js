let app = angular.module("app", ['ngStorage']);

app.controller("SecretSantaController", function ($scope, $localStorage) {

    let giftedPerson = '';

    // заводим булки для отображения/скрытия нужных блоков на вьюхе (загрузка списка участников/получение учаcтника кому дарить)
    $scope.isUploaded = false;
    $scope.isRecieved = false;

    getPersonsToView();

    console.log($localStorage.personsStartedList);
    console.log($localStorage.persons);

    // сохраняем список участников и его неизменную копию в локальном хранилище
    $scope.savePersons = () => {
        $localStorage.persons = $scope.enteredPersonsList.trim().split(',');

        if ($localStorage.persons.length < 3) {
            alert('Введите хотя бы 3 участников.');
            return;
        } 

        $localStorage.personsStartedList = [];
        let enteredPersonsList = angular.copy($scope.enteredPersonsList.trim().split(',')); // преобразуем введенную пользователем строку в массив
        enteredPersonsList.forEach(item => {
            $localStorage.personsStartedList.push(item.trim()); // наполняем массив для localStorage всеми введенными фамилиями, убирая лишние пробелы
        });

        $scope.isUploaded = true;
        getPersonsToView();
        
    }

    // отображаем рандомного участника на вьюхе, проверив, что это не текущий пользователь
    $scope.loadPerson = () => {
        getGiftedPerson();
        $scope.isRecieved = true;
    }

    $scope.reloadPage = () => location.reload();
    
    // для корректного отображения блоков на вьюхе нужно дублировать код, поэтому вынес его в отдельную ф-ию 
    function getPersonsToView() {
        $scope.persons = $localStorage.persons; // список оставшихся участников, у кого еще нет Санты 
        $scope.personsStartedList = $localStorage.personsStartedList; // общий список участников для отображения на вьюхе
    }

    function getGiftedPerson() {
        // оповещаем пользователя, если в списке осталась только его фамилия
        if ($localStorage.persons.length === 1 && $scope.user === $localStorage.persons[0].trim()) {
            alert('В списке осталась только ваша фамилия. Либо Вы уже стали Сантой, либо кто-то накосячил!');
            location.reload();
            return;
        }

        // исключаем себя из списка при выборе участника
        $scope.filteredPersons = $localStorage.persons.filter(item => item.trim() !== $scope.user);

        $scope.randomPersonIndex = Math.floor(Math.random() * $scope.filteredPersons.length);
        giftedPerson = $scope.filteredPersons[$scope.randomPersonIndex].trim();

        let hasUser = $localStorage.personsStartedList.includes($scope.user);

        if (!hasUser) {
            alert('Введите корректную фамилию из списка');
            location.reload();
            return;
        }

        // исключаем выбранного участника из общего списка в localStorage
        let indexToDelete = $localStorage.persons.findIndex(item => item.trim() === giftedPerson);
        $localStorage.persons.splice(indexToDelete, 1);
        $scope.giftedPerson = giftedPerson;
    }
})