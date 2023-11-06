import { useEffect, useState } from "react"

const Profile = (props) =>{


    return(<>
        <div className='flex border border-gray-200 p-6 mb-6 gap-7'>
            <div className="w-1/4 ">
                <img className="m-auto" src={props.data.avatar_url} />
                <div className="bg-gray-900 text-white rounded p-3 mt-3 text-center">View Profile</div>
            </div>
            <div className="w-3/4">
                <div className="flex mb-4">
                    <span className="bg-gray-900 text-white rounded pl-3 pr-3 p-1"> Public Repos : {props.data.public_repos}</span>
                    <span className="bg-gray-400 text-white rounded pl-3 pr-3 p-1 ml-2"> Public Gists : {props.data.public_gists}</span>
                    <span className="bg-[#00cccc] text-white rounded pl-3 pr-3 p-1 ml-2"> Followers : {props.data.followers}</span>
                    <span className="bg-[#3385ff] text-white rounded pl-3 pr-3 p-1 ml-2"> Following : {props.data.following}</span>
                </div>
                <div className="border border-gray-200">
                    <div className="flex p-6 border-b items-center">
                        <span className="font-semibold text-lg">Company : </span> 
                        {props.data.company == null ? (<span className="bg-[#ff9900] text-white rounded pl-3 pr-3 p-1 ml-2"> No Details Provided</span>):(<span className="text-lg">{props.data.company}</span>)}
                    </div>
                    <div className="flex p-6 border-b items-center">
                        <span className="font-semibold text-lg">Website/Blog :</span>
                        {props.data.blog == null ? (<span className="bg-[#ff9900] text-white rounded pl-3 pr-3 p-1 ml-2"> No Details Provided</span>):(<span className="text-lg">{props.data.blog}</span>)}
                    </div>
                    <div className="flex p-6 border-b items-center">
                        <span className="font-semibold text-lg">Location :</span>
                        {props.data.location == null ? (<span className="bg-[#ff9900] text-white rounded pl-3 pr-3 p-1 ml-2"> No Details Provided</span>):(<span className="text-lg">{props.data.location}</span>)}
                    </div>
                    <div className="flex p-6 border-b items-center">
                        <span className="font-semibold text-lg">Member Since : </span>
                        <span className="text-lg"> None</span>
                    </div>
                    <div className="flex p-6 border-b items-center">
                        <span className="font-semibold text-lg">Want to be Hired : </span>
                        <span className="text-lg">None</span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Profile;