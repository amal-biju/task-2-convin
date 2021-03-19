import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, toggleFavoriteStatus } from "../Redux/posts/actions";
import Post from "../Components/Post.js";

const HomePage = () => {
   const dispatch = useDispatch();
   const posts = useSelector((state) => state.post.posts);
   const [page, setPage] = useState(1);

   useEffect(() => {
      getData(page);
   }, [page]);

   function getData(page) {
      dispatch(getPosts(page));
   }

   const handleToggle = (id, status) => {
      dispatch(toggleFavoriteStatus({ id, status }));
      setTimeout(() => {
         getData(page);
      }, 2000);
   };

   window.addEventListener(
      "scroll",
      () => {
         const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
         if (scrollTop + clientHeight === scrollHeight) {
            if (page < 10) {
               setPage(page + 1);
            }
         }
      },
      {
         passive: true,
      }
   );
   return (
      <div>
         <div>
            {posts?.map((item) => (
               <Post item={item} key={item.id} handleToggle={handleToggle} />
            ))}
         </div>
      </div>
   );
};

export default HomePage;
