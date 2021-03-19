import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavPosts, toggleFavoriteStatus } from "../Redux/posts/actions";
import Post from "../Components/Post.js";

const Favorites = () => {
   const dispatch = useDispatch();
   const favs = useSelector((state) => state.post.favs);

   useEffect(() => {
      dispatch(getFavPosts());
   }, [dispatch]);

   const handleToggle = (id, status) => {
      dispatch(toggleFavoriteStatus({ id, status }));
      setTimeout(() => {
         dispatch(getFavPosts());
      }, 2000);
   };

   return (
      <div>
         <div>
            {favs?.map((item) => (
               <Post item={item} key={item.id} handleToggle={handleToggle} />
            ))}
         </div>
      </div>
   );
};

export default Favorites;
