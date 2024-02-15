import { useParams } from "react-router-dom";
import { people } from "../useState/studentai";  
import { useEffect, useState } from "react";
import axios from "axios";

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
        <>
        <h1>{post.title}</h1>
        <h3>{post.body}</h3>
        </>
    );
};