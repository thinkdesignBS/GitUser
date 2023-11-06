import React from "react";
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'
import Header from "../components/Header";
import notFound from "../assets/images/404.svg";

const Error = () => {

    const error = useRouteError()
    const navigate = useNavigate()

    return(
        <>
            <Header/>
            {error.status === 404 ?(<>
                <div className=' h-screen flex flex-col justify-center items-center'>
                    <div>
                        <img src={notFound} width='450px' height='450px' />
                    </div>
                </div>
            </>):(<></>)
            }
        </>
    )
}

export default Error