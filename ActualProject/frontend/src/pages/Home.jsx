import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdOutlineAddBox } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

export const Home = () => {
  const [books,setBooks] = useState([]);
  const [loading,setLoading] = useState([false]);
  useEffect(()=>{
    setLoading(true)
    axios.get('http//localhost:5555/books')
    .then((res)=>{
      setBooks(res.data.data);
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false);
    })
  }, [])
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3x1 my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4x1'/>
        </Link>
      </div>
      {loading ? (<Spinner/>): 
      <table className='w-full border-separate border-spacing-2'>
       <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>Nº</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>Published Year</th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
       </thead> 
       <tbody>
        {
          books.map((book,index) =>(
            <tr key={book._id} className='h-8'>
              <td className='border border-slate-700 rounded-md text-center'
              
            </tr>
          ))
        }
       </tbody>
      </table>}

    </div>
  )
}

export default Home