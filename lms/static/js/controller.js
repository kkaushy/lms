lmsApp.controller("leaveDetailsCtrl", function($scope,empId,leaveDetailsFactory){
	
	$scope.data = "hellow"+empId;
	$scope.title = "Leave Balance";
	
	leaveDetailsFactory.getLeaveBalance(empId)
		.success(function(leavesDetail){
			$scope.leavesDetail = leavesDetail;
			console.log(leavesDetail);
	})
});


lmsApp.controller("newLeaveCtrl", function($scope, empId, newLeaveFactory){
	$scope.data = "new leave";
	$scope.title = "New Leave";
})

lmsApp.controller("memoirsCtrl", function($scope){
	$scope.data = "Memoirs";
	$scope.title = "Memoirs";
})