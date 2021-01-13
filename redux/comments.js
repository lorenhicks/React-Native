import * as ActionTypes from "./ActionTypes";

export const comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_COMMENT:
      const campComment = action.payload;
      campComment.id = state.comments.length;
      return {
        ...state,
        errMess: null,
        comments: state.comments.concat(campComment),
      };

    default:
      return state;
  }
};
