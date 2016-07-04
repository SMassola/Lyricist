const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorActions = {
  setErrors(type, errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      type: type,
      errors: errors
    });
  },

  clearErrors() {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  }
};

module.exports = ErrorActions;
