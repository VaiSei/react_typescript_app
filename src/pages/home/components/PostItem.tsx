/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PostInterface } from '../interfaces';
import {Link} from 'react-router-dom';


interface Props{
    post: PostInterface;
}

export const PostItem=({ post:{id,reactions,tags,title} }:Props )=>(
    <div css={css` background:pink; height: 150px; width: 70%; margin:auto;margin-bottom: 40px;padding: 20px;border-radius:20px; border: 1px solid red;
    `} 
key={id}> <Link to={`/currentPost/${id}`} css={css` text-decoration:none; color:black; `}>

        <h3> <Link to={`/currentPost/${id}`} css={css` text-decoration:none; color:black; `}> {title} </Link> </h3>
        <h4>reactions: <span>{reactions}</span></h4>
        <h4>tags: {tags[0]} {tags[1]} {tags[2]}</h4>
        </Link></div> 
    );
