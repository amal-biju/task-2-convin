import axios from "axios";
import {
   GET_FAV_POSTS_FAILURE,
   GET_FAV_POSTS_REQUEST,
   GET_FAV_POSTS_SUCCESS,
   GET_POSTS_FAILURE,
   GET_POSTS_REQUEST,
   GET_POSTS_SUCCESS,
   TOGGLE_ISFAVOURITE,
} from "./actionTypes";

const getPostsRequest = (payload) => ({
   type: GET_POSTS_REQUEST,
   payload,
});

const getPostsFailure = (err) => ({
   type: GET_POSTS_FAILURE,
   payload: err,
});

const getPostsSuccess = (payload) => ({
   type: GET_POSTS_SUCCESS,
   payload,
});

export const getPosts = (page) => (dispatch) => {
   dispatch(getPostsRequest());
   axios
      .get(`https://serverfake.herokuapp.com/posts/?_page=${page}`)
      .then((res) => {
         dispatch(getPostsSuccess(res.data));
      })
      .catch((err) => {
         dispatch(getPostsFailure(err));
      });
};

const getFavPostsRequest = (payload) => ({
   type: GET_FAV_POSTS_REQUEST,
   payload,
});

const getFavPostsFailure = (err) => ({
   type: GET_FAV_POSTS_FAILURE,
   payload: err,
});

const getFavPostsSuccess = (payload) => ({
   type: GET_FAV_POSTS_SUCCESS,
   payload,
});

export const getFavPosts = () => (dispatch) => {
   dispatch(getFavPostsRequest());
   axios
      .get(`https://serverfake.herokuapp.com/posts/?isFavourite=true`)
      .then((res) => {
         dispatch(getFavPostsSuccess(res.data));
      })
      .catch((err) => {
         dispatch(getFavPostsFailure(err));
      });
};

const toggleIsFavourite = (id) => ({
   type: TOGGLE_ISFAVOURITE,
   payload: id,
});

export const toggleFavoriteStatus = ({ id, status }) => (dispatch) => {
   var data = { isFavourite: !status };
   data = JSON.stringify(data);

   let config = {
      method: "patch",
      url: `https://serverfake.herokuapp.com/posts/${id}`,
      headers: {
         "Content-Type": "application/json",
      },
      data: data,
   };

   axios(config).then(() => {
      dispatch(getPosts());
      dispatch(getFavPosts());
   });
};
