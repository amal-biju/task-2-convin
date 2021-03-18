import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, toggleFavoriteStatus } from '../Redux/posts/actions';
import Post from '../Components/Post';
import Loader from '../Components/Loader';


const HomePage = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)
    const loading = useSelector(state => state.post.isLoading)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getPosts(page))
    }, [page])

    const handleToggle = (id, status) => {
        let payload = {
            id,
            status
        }
        dispatch(toggleFavoriteStatus(payload))
    }
    return (
        <div>
            {/* {loading ? (
                <Loader/>
            ) : ( */}
                <div>
                    {posts?.map(item => <Post item={item} key={item.id} handleToggle={handleToggle}/>)}
                </div>
            {/* )
            } */}
        </div>
    )
}

export default HomePage
