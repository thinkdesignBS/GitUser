const Repository = (props) =>{

    return(<>
        {
            props.data === null || props.data == ''? (<>
                Repos Not found
            </>):(
                props.data.map((rep) => 
                (
                    <div className='flex border border-gray-200 p-6 mb-6 gap-7'>
                        <div className="w-1/2">
                            <h2 className="text-[#00cccc] font-semibold text-2xl">{rep.name}</h2>
                            <p className="text-lg mt-3 mb-4">{rep.description}</p>
                            <a href={rep.html_url} target="_blank"><div className="bg-gray-900 text-white rounded p-3 mt-3 text-center w-[50%]">Visit Homepage/Demo Website</div></a>
                        </div>
                        <div className="w-1/2 items-center flex">
                            <div className="flex mb-4 ">
                                <span className="bg-[#ff9900] text-white rounded pl-3 pr-3 p-1 ml-2">Stars : {rep.stargazers_count}</span>
                                <span className="bg-[#3385ff] text-white rounded pl-3 pr-3 p-1 ml-2">Watchers : {rep.watchers_count}</span>
                                <span className="bg-[#00cccc] text-white rounded pl-3 pr-3 p-1 ml-2">Forks : {rep.forks_count}</span>
                            </div>
                        </div>
                    </div>
                ))
            )
        }
    </>)
}

export default Repository;