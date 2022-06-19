/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {CurrentPostInterface} from "./interfaces"
import {PostItem} from "./components/PostItem"

export const PostFeature = () => { 
    const postId= useParams();
    const [post, setPost]= useState({} as CurrentPostInterface);
    
    useEffect(()=>{
        
        fetch('https://dummyjson.com/posts/'+JSON.stringify(postId).replace(/[^0-9]/g,''))
        .then(res => res.json())
        .then((data)=>{setPost(data)});
    },[]);
    
    return <div>
       <PostItem post={post} /> 
    </div>
    
};
