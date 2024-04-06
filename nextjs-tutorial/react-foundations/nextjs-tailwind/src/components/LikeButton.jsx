'use client';
 
import { useState } from 'react';
 
export default function LikeButton() {
  const [likes, setLikes] = useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return <button className='border-solid border-2 border-indigo-600 w-32 mx-auto rounded-full h-12 hover:bg-indigo-400 hover:text-white text-xl' onClick={handleClick}>Like ({likes})</button>;
}