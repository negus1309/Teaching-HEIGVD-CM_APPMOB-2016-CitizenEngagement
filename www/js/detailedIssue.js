angular.module('citizen-engagement.detailedIssue',['ionic'])



.controller('DetailedIssueCtrl', function($scope, $stateParams, $http, apiUrl) {

  console.log($stateParams)
  var issId = $stateParams.issueId;

  $http({
    method: 'GET',
    url: apiUrl + '/issues/'+issId
  }).success(function(data) {
    console.log(data)
    $scope.detailedIssue = data;

    if(!$scope.detailedIssue.tags.length){
      $scope.hasNoTag = true;
    }else{
      $scope.hasNoTag = false;
    }


  })




})
