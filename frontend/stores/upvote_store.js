const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const UpvoteConstants = require('../constants/upvote_constants.js');

const UpvoteStore = new Store(AppDispatcher);

let _upvotes = {};

UpvoteStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UpvoteConstants.CREATED_UPVOTE:
      setUpvote(payload.upvote);
      UpvoteStore.__emitChange();
      break;
    case UpvoteConstants.DESTROYED_UPVOTE:
      destroyUpvote(payload.upvote);
      UpvoteStore.__emitChange();
  }
};

UpvoteStore.findUpvote = function(userId, annotation) {
  for(let i = 0; i < annotation.upvotes.length; i++) {
    if (annotation.upvotes[i].user_id === userId) {
      return annotation.upvotes[i];
    }
  }
  return null;
};

function setUpvote(upvote) {
  _upvotes[upvote.id] = upvote;
}

function destroyUpvote(upvote) {
  delete _upvotes[upvote.id];
}

module.exports = UpvoteStore;
