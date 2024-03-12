import { BLOGS_ACTION_TYPES } from "./blogsActionTypes";

const initialState = {
  blogs: [],
};

export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOGS_ACTION_TYPES.SET_ALL_BLOGS:
      return {
        ...state,
        blogs: [...action.payload],
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
