import { useParams } from "react-router-dom";
// import {people };
import axios, { Axios } from "axios"; 
import { useEffect, useState } from "react";

export const VienasStudentas = () => 
{
    const {id, title} = useParams();
    const {post, setPost}= useState();

    useEffect(()=> {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => setPost(response.data))
        .catch((error) => console.log(error));
    },[]);
    const VienasStudentas = people.find((person) => person.Id.toString() === id);
    return(
        <h1>{post.title}</h1>
        <h3>{post.body}</h3>
    );
};