import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavPosts } from '../Redux/posts/actions';
import Post from '../Components/Post';
import Loader from '../Components/Loader';

const Favorites = () => {
    const dispatch = useDispatch()
    const favs = useSelector((state) => state.post.favs)
    const loading = useSelector(state => state.post.isLoading)

    useEffect(() => {
        dispatch(getFavPosts())
    }, [])

    const handleToggle = id => {}

    return (
        <div>
            {loading ? (
                <Loader/>
            ) : (
                <div>
                    {favs?.map(item => <Post item={item} key={item.id} handleToggle={handleToggle}/>)}
                </div>
            )
            }
        </div>
    )
}

export default Favorites
