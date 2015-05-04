lmsApp.factory('newLeaveFactory', function($http){
	var urlBase = '/api/leave';
	var _leaveService = {};

	_leaveService.getLeaves = function(empId){
		if(empId)
			return $http.get(urlBase+"/"+empId);
		return $http.get(urlBase);
	}

	_leaveService.createLeave = function(Leave){
		return $http.post(urlBase, Leave);
	}

	return _leaveService;
});

lmsApp.factory('leaveDetailsFactory', function($http){
	var urlBase = '/api/leavebalance';
	var _leaveDetailsService = {};

	_leaveDetailsService.getLeaveBalance = function(empId){
		if(empId){
			return $http.get(urlBase+"/"+empId);	
		}
		return $http.get(urlBase);
	}

	_leaveDetailsService.creditLeave = function(LeaveBalance){
		return $http.post(urlBase, LeaveBalance);
	}

	return _leaveDetailsService;
});

lmsApp.factory('messageFactory', function($http){
	var urlBase = '/message';
	var _messageService = {};

	_messageService.getMessageList = function(){
		return $http.get(urlBase);
	}

	_messageService.createMessage = function(message){
		return $http.post(urlBase, message);
	}

	// _userService.getChatList = function(user){
	// 	return $http.get("/user/:userid/chat")
	// }

	return _messageService;
});