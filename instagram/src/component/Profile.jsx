import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Stories from './Stories';

function Profile() {
    const [profile, setProfile] = useState(null);
    const [follower, setFollower] = useState([]);

    useEffect(() => {
        // Fetch profile data
        axios.get('http://localhost:3000/Profile')
            .then((response) => setProfile(response.data))
            .catch((err) => console.log(err));

        // Fetch followers data
        axios.get('http://localhost:3000/followers')
            .then((response) => setFollower(response.data))
            .catch((err) => console.log(err));
    }, []);

    // Handle input changes for profile update
    const OnchangeHandle = (e) => {
        setProfile((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // Handle profile update
    const UpdateHandle = async (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/Profile', profile)
            .then(() => {
                console.log('Profile updated successfully');
                toast.success('Profile updated successfully!');
            })
            .catch((err) => {
                console.log(err);
                toast.error('Failed to update profile.');
            });
    };

    // Handle unfollow action

    return (
        <div>
            <ToastContainer />
            {profile ? (
                <div className="mt-10 ">
                    <div className="flex items-center">
                        <div>
                            <img
                                className="rounded-full h-37 w-37 lg:h-40 lg:w-40 object-cover"
                                src={profile.profile_pic}
                                alt="profile"
                            />
                        </div>
                        <div className="px-10 lg:pl-25">
                            <div className="flex">
                                <h1 className="text-lg mr-10">{profile.username}</h1>
                                <div className="flex mx-auto lg:mx-15">
                                    <button className="bg-gray-800 font-semibold text-gray-300 px-3 py-1 mx-1 lg:mx-2 rounded-sm">
                                        <details className="dropdown">
                                            <summary className="bg-gray-800">Edit Profile</summary>
                                            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-60 px-4 shadow-sm">
                                                <li>
                                                    <input
                                                        type="text"
                                                        placeholder="Username"
                                                        className="input"
                                                        value={profile.username}
                                                        name="username"
                                                        onChange={OnchangeHandle}
                                                    />
                                                </li>
                                                <li>
                                                    <input
                                                        type="text"
                                                        placeholder="Profile Picture URL"
                                                        className="input"
                                                        value={profile.profile_pic}
                                                        name="profile_pic"
                                                        onChange={OnchangeHandle}
                                                    />
                                                </li>
                                                <li className="items-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={UpdateHandle}
                                                    >
                                                        Update
                                                    </button>
                                                </li>
                                            </ul>
                                        </details>
                                    </button>
                                    <button className="bg-gray-800 font-semibold text-gray-300 px-3 py-1 mx-1 lg:mx-2 rounded-sm">
                                        View Archive
                                    </button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-7 mx-1 lg:mx-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex gap-10 lg:gap-15 my-5 mx-2">
                                <p className="text-lg font-semibold">
                                    15 <span className="text-gray-400">posts</span>
                                </p>
                                <p className="text-lg font-semibold">
                                    143 <span className="text-gray-400">followers</span>
                                </p>
                                <p className="text-lg font-semibold">
                                    379 <span className="text-gray-400">following</span>
                                </p>
                            </div>
                            <div className="w-80 lg:w-100">
                                <ul>
                                    <li className="mb-1">
                                        👉 If you 💪want to 📈 increase your 🚀success rate Double your 📉failure rate
                                    </li>
                                    <li>👉 The love of 💵money is the root of all evil 💰😈</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-15 flex justify-center mr-10 pr-50">
                        <Stories />
                    </div>

                    <div className=' hidden lg:block border-b border-0 border-gray-700 mt-10 mb-2 w-4/5'>
                    </div>

                    <div className=' hidden lg:flex  justify-center gap-20 pr-40 text-gray-400'>
                        <p>Post</p>
                        <p>Reels</p>
                        <p>Saved</p>
                        <p>Tagged</p>
                    </div>

                    <div className=' hidden lg:flex  justify-center gap-20 pr-40 text-gray-400'>
                        
                        </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>

    );
}

export default Profile;