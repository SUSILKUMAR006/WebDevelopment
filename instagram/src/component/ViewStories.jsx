import React, { useEffect, useState } from 'react';
import { useParams,Link , useNavigate} from 'react-router-dom';

function ViewStories() {
    const { id , tot} = useParams();
    const [story, setStory] = useState(null);
    const Navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/Stories/${id}`)
            .then(res => res.json())
            .then(res => setStory(res))
            .catch(err => console.log(err));
    }, [id]);
    if(id>tot || id<=0){
      Navigate('/');
    }
    return (
        <div>
            {story ? (
                <div className='flex justify-center items-center gap-10 '>
                    <div>
                       <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></Link>
</div>
                    <div className='bg-black mt-8 rounded py-5 pt-10'>
                        <img className='h-150 w-100 object-contain my-auto ' src={story.image} alt={story.user.username} />
                        <p>{story.user.username}</p>
                    </div>
                    <div> <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg></Link>
</div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default ViewStories;