import { BLOGS_ACTION_TYPES } from "./blogsActionTypes";

export const setAllBlogs = (blogs) => {
  return {
    type: BLOGS_ACTION_TYPES.SET_ALL_BLOGS,
    payload: blogs,
  };
};
