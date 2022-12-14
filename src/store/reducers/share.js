import {
  SHOW_LMS,
  CHANGE_LOADING,
  GOOGLE_SHARE,
  ALL_COURSES,
  GET_COURSE_TOPICS,
} from '../actionTypes';

const INITIAL_STATE = {
  shareVendors: [],
  loadingShare: false,
  googleShare: false,
  courses: false,
  topics: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_LMS:
      return {
        ...state,
        shareVendors: action.lmsInfo,
      };

    case CHANGE_LOADING:
      return {
        ...state,
        loadingShare: action.change,
      };

    case GOOGLE_SHARE:
      return {
        ...state,
        googleShare: action.value,
      };

    case ALL_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_COURSE_TOPICS:
      return {
        ...state,
        topics: action.payload,
      };

    default:
      return state;
  }
};
