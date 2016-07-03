const SessionApiUtil = {
	logIn(user, successCallback, errorCallback) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: {user: user},
			success: function(resp) {
        successCallback(resp);
      },
			error(resp) {
				let errors = resp.responseJSON;
				errorCallback(errors);
			}
		});
	},

	logOut(successCallback) {
		$.ajax({
			url: '/api/session',
			method: 'DELETE',
			success: function(resp) {
        successCallback(resp);
      }
		});
	},

	signUp(user, successCallback, errorCallback) {
		$.ajax({
			url: '/api/users',
			type: 'POST',
			dataType: 'JSON',
			data: {user: user},
			success: function(resp) {
        successCallback(resp);
      },
			error(resp) {
				let errors = resp.responseJSON;
				errorCallback(errors);
			}
		});
	},
};

module.exports = SessionApiUtil;
