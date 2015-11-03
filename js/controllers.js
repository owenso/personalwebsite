
portfolioApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
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
        }).then(function(modal) {
      modal.close.then(function(result) {
        $scope.customResult = "All good!";
            });
        });
    };

      $scope.showEssieArt = function() {
        ModalService.showModal({
            templateUrl: '/pages/project_modals/artbyessieo.html',
            controller: "ModalController"
        }).then(function(modal) {
      modal.close.then(function(result) {
        $scope.customResult = "All good!";
            });
        });
    };
      $scope.showChromeWeather = function() {
        ModalService.showModal({
            templateUrl: '/pages/project_modals/chromeweatherext.html',
            controller: "ModalController"
        }).then(function(modal) {
      modal.close.then(function(result) {
        $scope.customResult = "All good!";
            });
        });
    };
      $scope.showMakemea = function() {
        ModalService.showModal({
            templateUrl: '/pages/project_modals/makemea.html',
            controller: "ModalController"
        }).then(function(modal) {
      modal.close.then(function(result) {
        $scope.customResult = "All good!";
            });
        });
    };
      $scope.showSosnow = function() {
        ModalService.showModal({
            templateUrl: '/pages/project_modals/sosnow.html',
            controller: "ModalController"
        }).then(function(modal) {
      modal.close.then(function(result) {
        $scope.customResult = "All good!";
            });
        });
    };
      $scope.showWorkoutapp = function() {
        ModalService.showModal({
            templateUrl: '/pages/project_modals/workoutapp.html',
            controller: "ModalController"
        }).then(function(modal) {
      modal.close.then(function(result) {
        $scope.customResult = "All good!";
            });
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