import {
   GET_FAV_POSTS_FAILURE,
   GET_FAV_POSTS_REQUEST,
   GET_FAV_POSTS_SUCCESS,
   GET_POSTS_FAILURE,
   GET_POSTS_REQUEST,
   GET_POSTS_SUCCESS,
   TOGGLE_STATUS,
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
         const obj = {};
         const unique = [...payload, ...state.posts]
            .filter((item) => {
               if (item.id in obj) {
                  return false;
               } else {
                  obj[item.id] = item;
                  return true;
               }
            })
            .sort((a, b) => a.id - b.id);
         console.log(unique);
         return {
            ...state,
            isLoading: false,
            posts: [...unique],
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

      case TOGGLE_STATUS:
         return {
            ...state,
            posts: state.posts.map((item) => (item.id === payload ? { ...item, isFavourite: !item.isFavourite } : item)),
            favs: state.favs.map((item) => (item.id === payload ? { ...item, isFavourite: !item.isFavourite } : item)),
         };

      default:
         return state;
   }
};
