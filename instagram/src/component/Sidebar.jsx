import React from 'react'
import { useNavigate } from 'react-router-dom';
function Sidebar() {
    const Navigate = useNavigate();
    return (
        <div className='hidden   md:block'>
            <div className='text-white lg:w-60  p-0 lg:p-2 flex flex-col gap-3 font-semibold fixed bg-blak h-full border-r-2 border-gray-900'>
                <img className='hidden lg:block object-cover w-30 m-2' src="src\assets\logo.png" alt="" />
                {/* <img src="" alt="" /> */}
                <div onClick={()=>Navigate('/')}  className='cursor-pointer hover:bg-gray-900 py-2 px-2 m-2 lg:m-0 lg:pl-3 lg:pr-6 rounded flex gap-2 font-semibold text-lg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 bg-transparent">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
                    <span className='hidden lg:block bg-transparent'>Home</span></div>
                <div className='cursor-pointer hover:bg-gray-900 py-2 px-2 m-2 lg:m-0 lg:pl-3 lg:pr-6   rounded flex gap-2 font-semibold text-lg' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
                    <span className='hidden lg:block'>  Search</span></div>
                <div className='cursor-pointer hover:bg-gray-900 py-2 px-2 m-2 lg:m-0 lg:pl-3 lg:pr-6  rounded flex gap-2 font-semibold text-lg ' ><i className="bi bi-compass pr-1"></i>
                    <span className='hidden lg:block'>  Explore</span></div>
                <div className='cursor-pointer hover:bg-gray-900 py-2 px-2 m-2 lg:m-0 lg:pl-3 lg:pr-6  rounded flex gap-2 font-semibold text-lg' ><i className="bi bi-collection-play pr-1"></i>
                    <span className='hidden lg:block'>  Reels</span></div>
                <div className='cursor-pointer hover:bg-gray-900 py-2 px-2 m-2 lg:m-0 lg:pl-3 lg:pr-6  rounded flex gap-2 font-semibold text-lg' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>

                    <span className='hidden lg:block'> Messages </span></div>
                <div className='cursor-pointer hover:bg-gray-900 py-2 px-2 m-2 lg:m-0 lg:pl-3 lg:pr-6  rounded flex gap-2 font-semibold text-lg' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                    <span className='hidden lg:block'>  Notifications</span></div>
                <div className='cursor-pointer hover:bg-gray-900 py-2 px-2 m-2 lg:m-0 lg:pl-3 lg:pr-6  rounded flex gap-2 font-semibold text-lg' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                    <span className='hidden lg:block'>Create</span> </div>
                <div onClick={()=>Navigate('/profile')} className='cursor-pointer hover:bg-gray-900 py-2 px-2 m-2 lg:m-0 lg:pl-3 lg:pr-6  rounded flex gap-2 font-semibold text-lg'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                    <span className='hidden lg:block'> Profile</span></div>
            </div> 

            <div className='text-white p-2 w-47  flex flex-col gap-3  font-semibold fixed bottom-0  '>
                <div className=' cursor-pointer hover:bg-gray-900 py-2 pl-3 pr-8  rounded flex gap-2 font-semibold text-lg'> <i className="bi bi-threads mr-1"></i>  <span className='hidden lg:block'>Threads </span></div>
                <div className=' cursor-pointer hover:bg-gray-900 py-2 pl-3 pr-6 rounded flex gap-2 font-semibold text-lg'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                    <span className='hidden lg:block'> More </span></div>
            </div>
        </div>
    )
}

export default Sidebar