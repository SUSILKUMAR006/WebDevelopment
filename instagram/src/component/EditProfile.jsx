import React from 'react'
import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stories from './Stories';

function EditProfile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/Profile')
            .then(data => setProfile(data.data))
    }, [])


    function OnchangeHandle(e) {
        
        setProfile((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
            
        }))
    }

    const UpdateHandle = async (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/Profile', profile)
            .then(console.log("ok"))
            .catch(err => console.log(err))
    }

    const notify = (message) => {
        // toast.success(message, {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: false,
        //     pauseOnHover: true,
        //     draggable: true,
        //     theme: "light",
        // });
    };
    return (
        <div>
            {profile ?
                (

                    <div className='mt-10'>
                        
                            
                        <div>
                            <div className='flex justify-center mt-10 flex-col gap-3 items-center'>
                                <input type="text" placeholder="Type here" className="input" value={profile.username} name='username' onChange={OnchangeHandle} />
                                <input type="text" placeholder="Type here" className="input" value={profile.profile_pic} name='profile_pic' onChange={OnchangeHandle} />
                                <button type="button" className="btn btn-primary" onClick={(e)=>UpdateHandle(e)}>Update</button>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick={false}
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light"
                                />
                            </div>
                        </div>
                    </div>

                ) : (<div>Loading</div>)}
        </div>
    )
}

export default EditProfile