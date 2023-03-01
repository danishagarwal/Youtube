import React from 'react'
import { Outlet } from 'react-router-dom';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar'

const Body = () => {
    return (
        <div className='flex'>
            <Sidebar />

            {/* We either want all our videos to be displayed or our watchPage hence outlet -> It will take body's childern*/}
            <Outlet />
        </div>
    )
}

export default Body; 