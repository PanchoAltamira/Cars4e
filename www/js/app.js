var myApp  =  angular.module('myApp', ['ngRoute'])
.config(function($routeProvider) {
$routeProvider
    .when('/', {
        templateUrl : 'pages/principal.html',
        controller  : 'ctrlCatalogo'
    })
     .when('/actividades', {
        templateUrl : 'pages/actividades.html',
        controller  : 'ctrlActivities'
    })
    .otherwise({
        redirectTo: 'index.html'
    });
});

function capturePhoto() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
}

function onPhotoDataSuccess(imageData) {
    var image = document.getElementById('smallImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}