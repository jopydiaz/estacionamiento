// Creates the addCtrl Module and Controller. Note that it depends on the 'geolocation' module and service.
var addCtrl = angular.module('addCtrl', ['geolocation', 'gservice']);
addCtrl.controller('addCtrl', function($scope, $http, geolocation, gservice){
    
    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0;
    //
    $scope.listado= {};
    
    $http.get('/users').success(function(data) {
		$scope.listado = data;
	})
	//.error(function(data) {
	//	console.log('Error: ' + data);
	//});
    
    //
    // Initializes Variables
    // ----------------------------------------------------------------------------
   
    
    
    $scope.formData.latitude = -31.423312;
    $scope.formData.longitude = -64.190968;

    
     
    // Set initial coordinates to the center of the US
   
   
                   
    // Functions
    // ----------------------------------------------------------------------------
    // Creates a new user based on the form fields
    $scope.createUser = function() {
        
        
         if($scope.formData.age === 1){
             $scope.formData.latitude  = -31.424910;
             $scope.formData.longitude =   -64.190004}
         if($scope.formData.age === 2){
             $scope.formData.latitude  = -31.425734;
             $scope.formData.longitude =  -64.189628}
         if($scope.formData.age === 3){
             $scope.formData.latitude  = -31.426082;
             $scope.formData.longitude =  -64.190540}
        if($scope.formData.age === 4){
             $scope.formData.latitude  = -31.425066;
             $scope.formData.longitude =  -64.190916}
    
       
        // Grabs all of the text box fields
        var userData = {
            username: $scope.formData.username,
            gender: $scope.formData.gender,
            age: $scope.formData.age,
            favlang: $scope.formData.favlang,
            location: [$scope.formData.longitude, $scope.formData.latitude],
        };

        // Saves the user data to the db
        $http.post('/users', userData)
            .success(function (data) {

                // Once complete, clear the form (except location)
                $scope.formData.username = "";
                $scope.formData.gender = "";
                $scope.formData.age = "";
                $scope.formData.favlang = "";
                gservice.refresh($scope.formData.latitude, $scope.formData.longitude);//no se si esta bien aca
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
         
    };
    
});