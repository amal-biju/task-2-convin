import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, toggleFavoriteStatus } from "../Redux/posts/actions";
import Post from "../Components/Post.js";
import Loader from "../Components/Loader";
import InfiniteLoader from "react-infinite-loader";

const HomePage = () => {
   const dispatch = useDispatch();
   const posts = useSelector((state) => state.post.posts);
   const loading = useSelector((state) => state.post.isLoading);
   const [page, setPage] = useState(1);

   useEffect(() => {
      if (page <= 10) {
         getData(page);
      }
   }, [page]);

   function getData(page) {
      dispatch(getPosts(page));
   }

   const handleToggle = (id, status) => {
      dispatch(toggleFavoriteStatus({ id, status }));
   };

   if (page >= 6 && page < 10) {
      window.addEventListener("scroll", () => {
         const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
         if (scrollTop + clientHeight === scrollHeight) {
            setPage(page + 1);
         }
      });
   }

   return (
      <div>
         <div>
            {posts?.map((item) => (
               <Post item={item} key={item.id} handleToggle={handleToggle} />
            ))}
         </div>
         {loading && <Loader />}
         <InfiniteLoader onVisited={() => setPage(page + 1)} />
      </div>
   );
};

export default HomePage;
