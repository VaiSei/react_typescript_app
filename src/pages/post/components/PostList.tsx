/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { CurrentPostInterface } from '../interfaces';
import { PostItem } from './PostItem';

export const PostList= () => {
    const [posts, setPosts]=useState([] as CurrentPostInterface[]);

    useEffect(()=>{
        console.log("hi use ")
        fetch('https://dummyjson.com/posts?limit=10')
        .then(res => res.json())
        .then((data)=>{
            console.log(data)  

            setPosts(data.posts);
            console.log(posts)
        });}, [])
    return <div>
        {posts.map((post)=>(
            <PostItem post={post} />
            
        ))}
    </div> 
};
