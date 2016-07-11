const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');
const Header = require('../header.jsx');
const UpvoteConstants = require('../constants/upvote_constants.js');
const SessionStore = new Store(AppDispatcher);

let _currentUser = {};

const _login = function(currentUser) {
  _currentUser = currentUser;
};

const _logout = function() {
  _currentUser = {};
};

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
    	_logout();
      SessionStore.__emitChange();
      break;
    case UpvoteConstants.DESTROYED_UPVOTE:
      destroyUpvote(payload.upvote.annotationId);
      SessionStore.__emitChange();
      break;
    case UpvoteConstants.CREATED_UPVOTE:
      createUpvote(payload.upvote.annotationId);
      SessionStore.__emitChange();
      break;
  }
};

function createUpvote(annotationId) {
  _currentUser.upvoted_annotations.push(parseInt(annotationId));
}

function destroyUpvote(annotationId) {
  let annotationIdx = _currentUser.upvoted_annotations.indexOf(parseInt(annotationId));
  _currentUser.upvoted_annotations.splice(annotationIdx, 1);
}

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

module.exports = SessionStore;
