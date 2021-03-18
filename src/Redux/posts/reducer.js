import {
   GET_FAV_POSTS_FAILURE,
   GET_FAV_POSTS_REQUEST,
   GET_FAV_POSTS_SUCCESS,
   GET_POSTS_FAILURE,
   GET_POSTS_REQUEST,
   GET_POSTS_SUCCESS,
   TOGGLE_ISFAVOURITE,
} from "./actionTypes";

const initialState = {
   isLoading: false,
   posts: [],
   favs: [],
   error: false,
};

export const postsReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case GET_POSTS_REQUEST:
         return {
            ...state,
            isLoading: true,
            error: false,
         };

      case GET_POSTS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            posts: payload,
         };

      case GET_POSTS_FAILURE:
         return {
            ...state,
            isLoading: false,
            error: true,
         };
      case GET_FAV_POSTS_REQUEST:
         return {
            ...state,
            isLoading: true,
            error: false,
         };

      case GET_FAV_POSTS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            favs: payload,
         };

      case GET_FAV_POSTS_FAILURE:
         return {
            ...state,
            isLoading: false,
            error: true,
         };
      default:
         return state;
   }
};
