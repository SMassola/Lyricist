const SessionApiUtil = {
	logIn(user, successCallback) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: {user: user},
			success: function(resp) {
        successCallback(resp);
      },
		});
	},

	logOut(successCallback) {
		$.ajax({
			url: '/api/session',
			method: 'DELETE',
			success: function(resp) {
        successCallback(resp);
      },
		});
	},

	signUp(user, successCallback) {
		$.ajax({
			url: '/api/users',
			type: 'POST',
			dataType: 'JSON',
			data: {user: user},
			success: function(resp) {
        successCallback(resp);
      },
		});
	},
};

module.exports = SessionApiUtil;
