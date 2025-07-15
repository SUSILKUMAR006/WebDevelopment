import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [Profile, setProfile] = useState(null);
  const [Suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/Profile')
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((error) => console.log(error));

    fetch("http://localhost:3000/Suggestions")
      .then((respose) => respose.json())
      .then((responce) => setSuggestions(responce));
  }, []);

  const FollowHandle = async(id,username) =>{
    axios.post("http://localhost:3000/followers",{"id":id,"username":username})
      .then(confirm("follow"))
      .catch(err => console.log(err));
}
  return (
    <div className=' hidden lg:block ml-0 mr-15 mt-10'>
      {Profile ?
        <div className='' key={Profile.id}>
          <div className="flex items-center gap-3">
            <img className='rounded-full h-12 w-12 object-cover' src={Profile.profile_pic} alt="" />
            <h5 className='font-bold'>{Profile.username}</h5>
            <p className='ml-auto text-blue-500 text-sm'>Switch</p>
          </div>
        </div>
        : <div>Loading</div>}
      <div className='flex mt-4 mb-3'>
        <p className='text-gray-500'>Suggested for you</p>
        <p className='font-semibold ml-auto text-sm'>See All</p>
      </div>
      {Suggestions.length > 0 ?(
         Suggestions.map((Suggestion) => <div className='flex items-center gap-3 my-3' key={Suggestion.id}>
          <img className='rounded-full w-10 h-10 object-cover' src={Suggestion.user.profile_pic} alt="" />
          <p className='text-sm'>{Suggestion.user.username}</p>
          <button onClick={()=>FollowHandle(Suggestion.id,Suggestion.user.username)} className='cursor-pointer text-sm bg-blue-500 text-white px-3 py-1 rounded ml-auto visited:text-purple-600'>Follow</button>
          </div>) )
        :( <div>
          <p>Loading</p>
        </div>)}
    </div>
  )
}

export default Suggestions