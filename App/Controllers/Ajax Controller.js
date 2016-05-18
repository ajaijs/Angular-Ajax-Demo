/**
 * Created by Ajai1 on 5/18/2016.
 */

app.controller('AjaxController', function($scope, $http) {
    $scope.showTable= false;
    $scope.searchBox = false;
    $scope.getData = function () {
        $http.get("http://jsonplaceholder.typicode.com/users/")
            .success(function (response) {
                $scope.searchBox = true;
                $scope.showTable = true;
                $scope.datas = (response)
            })
            .error(function (response) {
                alert("Something Went Wrong..")
            })
    }
});






