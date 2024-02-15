import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "./PosTDataFetching";

export const PostsDataFetching = () => {
const [postsArray, setPostArray] = useState([]);
const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {setPostArray(response.data)
        setIsLoading(false);
    })
        .catch(error => console.log(error));
    }, []);


    // console.log("post", postsArray);

    if (isLoading){
       return <div>Lauiam kol postai parsisius</div>;
    }

    return (
    <> 
    <h1>Post list</h1>
    {postsArray.map((post) => (
    <Post key={post.id} title={post.title} body={post.body}/>
    ))}
    </>
    );
};
