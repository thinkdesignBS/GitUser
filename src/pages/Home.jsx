import { useEffect, useState } from "react"
import { useLoaderData } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import SearchBar from "../components/SearchBar";
import { fetchUsers } from "../features/users"
import { fetchRepos } from "../features/repos";
import Profile from "../components/Profile";
import Repository from "../components/Repository";

const Home = () => {

    /*const [dataValue, setDataValue] = useState([]);

    const jsonPlaceHolder = async () => {
        const {data} = await axios.get('https://api.github.com/users/thinkdesignBS');
        console.log('Data',data);
        setDataValue(data)
    }

    useEffect(() => {
        jsonPlaceHolder();
    }, []);*/

    /*--redux---*/

    let url = window.location.search;
    let param = url.replace('?search=','');

    if(param == ''){
        param = 'thinkdesignBS';
    }

    const dispatch = useDispatch();
    const dataValue = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchUsers(param));  
        dispatch(fetchRepos(param));
    }, [])

    /*----redux----*/

    return(
        <>
            <div className='mt-4'>
                <div className="border border-gray-200 p-6 mb-6">
                    <SearchBar/>
                </div>
                {
                    dataValue.users.data === null ? (<>
                        Data Not found
                    </>):(
                    <>
                        <Profile data={dataValue.users.data}/>
                        <Repository data={dataValue.repos.data}/>
                    </>
                    )
                }
            </div>
        </>
    )
}

export default Home