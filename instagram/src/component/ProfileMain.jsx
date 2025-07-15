import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Profile';
import Sidebar from './Sidebar';

function ProfileMain() {
    const [follower, setFollower] = useState([]);

    // Fetch followers data on component mount
    useEffect(() => {
        axios.get('http://localhost:3000/followers')
            .then((response) => setFollower(response.data))
            .catch((err) => console.log(err));
    }, []);

    // Handle unfollow action
    const UnfollowHandle = async (id) => {
        axios.delete(`http://localhost:3000/followers/${id}`)
            .then(() => {
                // Remove the unfollowed user from the followers list
                setFollower((prev) => prev.filter((follow) => follow.id !== id));
                toast.success('Unfollowed successfully!');
            })
            .catch((err) => {
                console.log(err);
                toast.error('Failed to unfollow.');
            });
    };

    return (
        <div className="container h-lvh flex bg-black">
            {/* Sidebar */}
            <div className="w-25 lg:w-2/6 hidden md:block">
                <Sidebar />
            </div>

            {/* Main Profile Content */}
            <div className="w-full px-5 md:px-0 md:w-5/6">
                <Profile />
            </div>

            {/* Followers Section */}
            <div className="w-25 lg:w-80 hidden lg:block mt-20">
                <h1 className='my-5'>👋Un Watched followers 👇</h1>
                {follower.length > 0 ? (
                    <div className=''>

                        {follower.map((follow) => (
                            <div key={follow.id}>
                                <div className="flex justify-between w-50">
                                    <p className="m-1">{follow.username}</p>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default behavior
                                            e.stopPropagation(); // Stop event propagation
                                            UnfollowHandle(follow.id);
                                        }}
                                        className="m-1 bg-blue-500 px-2 text-sm py-1 rounded"
                                    >
                                        Unfollow
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Loading followers...</div>
                )}
            </div>

            {/* Toast Container for Notifications */}
            <ToastContainer />
        </div>
    );
}

export default ProfileMain;