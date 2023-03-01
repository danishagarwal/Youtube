import React from 'react'
import { AiTwotoneHome } from "react-icons/ai"
import { useSelector } from 'react-redux';

const Sidebar = () => {

    //Subscribe to specific part of store
    const isMenuOpenCheck = useSelector(store => store.sidebar.isMenuOpen);

    //Early return 
    if (!isMenuOpenCheck) {
        return null;
    }

    return (
        <div className='p-5 shadow-lg w-3/4'>

            <ul>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Home</li>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Shorts</li>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Live</li>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Sports</li>
            </ul>

            <h1 className='font-bold pt-5'>Subscriptions</h1>
            <ul>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Music</li>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Movies</li>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Gaming</li>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Sports</li>
            </ul>

            <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Music</li>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Movies</li>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Gaming</li>
                <li className='flex pr-2 p-1'><AiTwotoneHome className='pr-2 text-2xl' />Sports</li>
            </ul>

        </div>
    )
}

export default Sidebar;