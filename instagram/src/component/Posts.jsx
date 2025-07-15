import React, { useEffect, useState } from 'react'

function Posts() {
    const [Post, setPost] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then((data) => data.json())
            .then((data) => setPost(data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <div >
            {Post.length > 0 ?
                (
                    <div className='bg-black '>
                        {Post.map((feed) => (
                            <div className='my-5 mx-0 shadow border-b border-b-gray-800   lg:mx-40 bg-black py-6 ' key={feed.id}>
                                <div className="flex gap-2 items-center mb-3 mx-40 lg:mx-0">
                                    <img className='rounded-full h-10 w-10 object-cover' src={feed.user.profile_pic} alt="" />

                                    <div className='ml-1'>
                                        <h6 className=' '>{feed.user.username} <span className='ml-1 text-gray-500'> .1d</span></h6>
                                        <div><p className='text-gray-400 font-semibold w-30' style={{fontSize:"11px"
                                        }}> <marquee behavior="" direction="">Original audio :Anirudh Ravichander, Yogi Sekar, Amogh Balaji</marquee></p> </div>
                                        
                                    </div>
                                    <p className='ml-auto'><i className="bi bi-three-dots"></i></p>
                                </div>
                                <div className='w-full rounded   flex border border-gray-700'>
                                    <img className='w-100 h-110  mx-auto object-contain' src={feed.image} alt="" />
                                </div>
                                <div className='flex gap-5 mx-40 lg:mx-0 text-2xl my-2 font-bold'>
                                    <p><i className="bi bi-heart"></i> </p>
                                    <p><i className="bi bi-chat"></i></p>
                                    <p><i className="bi bi-send"></i></p>
                                    <p className='ml-auto'><i className="bi bi-bookmark"></i></p>
                                </div>
                                <div className='mx-40 lg:mx-0'>
                                    <p className='font-bold items-center flex gap-1 ' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-pink-600 ">
                                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                    </svg>
                                        {feed.likes} Likes</p>
                                </div>
                                <p className='mx-40 lg:mx-0'>
                                    {feed.caption}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>loding</div>
                )
            }
        </div>
    )
}

export default Posts