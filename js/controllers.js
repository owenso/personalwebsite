
portfolioApp.controller('mainController', function($scope) {
    $('#home-link').addClass('selected-link');
    $('#work-link').removeClass('selected-link');
    $('#fun-link').removeClass('selected-link');
    $('#contact-link').removeClass('selected-link');
});
portfolioApp.controller('workController', function($scope, ModalService) {
    $scope.message = 'work!';
    $('#work-link').addClass('selected-link');
    $('#home-link').removeClass('selected-link');
    $('#fun-link').removeClass('selected-link');
    $('#contact-link').removeClass('selected-link');



     $scope.showBlackjack = function() {
        ModalService.showModal({
            templateUrl: '/pages/project_modals/blackjack.html',
            controller: "ModalController"
        });
    };

      $scope.showEssieArt = function() {
        ModalService.showModal({
            templateUrl: '/pages/project_modals/artbyessieo.html',
            controller: "ModalController"
        });
    };
      $scope.showChromeWeather = function() {
        ModalService.showModal({
            templateUrl: '/pages/project_modals/chromeweatherext.html',
            controller: "ModalController"
        });
    };
      $scope.showMakemea = function() {
        ModalService.showModal({
            templateUrl: '/pages/project_modals/makemea.html',
            controller: "ModalController"
        });
    };
      $scope.showSosnow = function() {
        ModalService.showModal({
            templateUrl: '/pages/project_modals/sosnow.html',
            controller: "ModalController"
        });
    };
      $scope.showWorkoutapp = function() {
        ModalService.showModal({
            templateUrl: '/pages/project_modals/workoutapp.html',
            controller: "ModalController"
        });
    };
});
portfolioApp.controller('funController', function($scope) {
    $scope.message = 'fun page! parallax! wooo!';
    $('#fun-link').addClass('selected-link');
    $('#home-link').removeClass('selected-link');
    $('#work-link').removeClass('selected-link');
    $('#contact-link').removeClass('selected-link');
});
portfolioApp.controller('contactController', function($scope) {
    $scope.message = 'Contact page';
    $('#contact-link').addClass('selected-link');
    $('#work-link').removeClass('selected-link');
    $('#fun-link').removeClass('selected-link');
    $('#home-link').removeClass('selected-link');
});



portfolioApp.controller('ModalController', function($scope, close) {
  
  $scope.close = close;


});