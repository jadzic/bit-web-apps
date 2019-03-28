import React from 'react';


const PostListItem = (props) => (
    <li key={props.id}>
        <h3>{props.naslov}</h3>
        <p>{props.telo}</p>
    </li>
)

export default PostListItem