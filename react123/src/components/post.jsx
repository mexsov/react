import {Outlet, useNavigate } from 'react-router-dom';
export const Posts = () => {
const navigate = useNavigate();

return(

    <>
    <div>
        Tinklarascio irasu sarasas</div>
        <button onClick={() => navigate('123')}>presss me to read nr 123</button>
        <Outlet/>
        </>
)

}