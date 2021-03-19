import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPosts = (page) => {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [posts, setPosts] = useState([]);
   const [hasMore, setHasMore] = useState(false);

   useEffect(() => {
      setLoading(true);
      setError(false);
      axios
         .get(`https://serverfake.herokuapp.com/posts/?_page=${page}`)
         .then((res) => {
            setPosts((prevPosts) => [...prevPosts, ...res.data]);
            setHasMore(page < 10);
            setLoading(false);
         })
         .catch((err) => {
            setLoading(false);
            setError(true);
         });
   }, [page]);

   return { loading, error, posts, hasMore };
};

export default useFetchPosts;
