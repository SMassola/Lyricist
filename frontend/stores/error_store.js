const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(AppDispatcher);

let _errors = {};
let _form = "";

function setErrors(payload){
  _errors = payload.errors;
  _form = payload.form;
}

function clearErrors(){
  _errors = {};
  _form = "";
}

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload);
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      ErrorStore.__emitChange();
      break;
  }
};

ErrorStore.formErrors = function (form) {
  let errors = [];
  if (_form === form) {

    Object.keys(_errors).forEach(field => {
      errors.push(`${_errors[field]}`);
    });

  }
  return errors;
};

ErrorStore.form = function() {
  return _form;
};

module.exports = ErrorStore;
