import React from 'react';
import posts from '../entities/Posts'
import PostListItem from './PostListItem'

const PostList = (props) => {
    return posts.map(post => (
        <PostListItem naslov={post.title} telo={post.body} key={post.id} />
    ))
}

export default PostList