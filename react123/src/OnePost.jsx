import { Link, OutlinedInput } from "@mui/material"

export const OnePost = () =>{
    

    return(
        <>
        <h1>nelesk manes su tais klausimais :D parasyk barmenas ko reik ir bus </h1>
        <p>ar tu mane supranti barmene?</p>
        <Link to="comments"> skaityk receptus</Link>
        <Outlet />
        </>
        );
};