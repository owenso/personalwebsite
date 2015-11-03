
portfolioApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
    $('#home-link').addClass('selected-link');
    $('#work-link').removeClass('selected-link');
    $('#fun-link').removeClass('selected-link');
    $('#contact-link').removeClass('selected-link');
});
portfolioApp.controller('workController', function($scope) {
    $scope.message = 'work!';
    $('#work-link').addClass('selected-link');
    $('#home-link').removeClass('selected-link');
    $('#fun-link').removeClass('selected-link');
    $('#contact-link').removeClass('selected-link');
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