const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(AppDispatcher);

let _errors = {};
let _type = "";

function setErrors(payload){
  _errors = payload.errors;
  _type = payload.type;
}

function clearErrors(){
  _errors = {};
  _type = "";
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

ErrorStore.typeErrors = function (type) {
  let errors = [];
  if (_type === type) {

    Object.keys(_errors).forEach(field => {
      errors.push(`${_errors[field]}`);
    });

  }
  return errors;
};

ErrorStore.type = function() {
  return _type;
};

module.exports = ErrorStore;
