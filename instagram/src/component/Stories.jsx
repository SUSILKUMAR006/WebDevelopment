import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Stories() {

  const [Stories, SetSories] = useState([]);
  const Navigate = useNavigate();
  let tot =0;
  useEffect(() => {
    fetch('http://localhost:3000/Stories')
      .then((responce) => responce.json())
      .then((responce) => SetSories(responce))
      .catch((err) => console.log(err));
  }, [])
  return (
    <div className='h-26'>
      <div className='hidden'>{ tot = Stories.length}</div>
      <div>
        {Stories.length > 0 ? (
          <div className='flex gap-3 justify-center  mt-5'>
            {Stories.map((storie) => <div className='truncate flex flex-col items-center' key={storie.id} onClick={()=>{Navigate(`/Story/${storie.id}/${tot}`)}}>
              <div className=" w-16 h-16  flex items-center justify-center p-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full">
                <img className='w-15 h-15  object-cover  rounded-full' src={storie.user.profile_pic} alt="" />
              </div>

              <p className='truncate w-18 text-sm text-center'>{storie.user.username}</p>

            </div>)}
          </div>
        ) : (<div>
          Loading
        </div>

        )}

      </div>
    </div>
  )
}

export default Stories