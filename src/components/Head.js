import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/sideBarSlice';
import { Link } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
const Head = () => {


    //For Search box binding
    const [searchQuery, setSearchQuery] = useState("");
    //for suggestions 
    const [suggestions, setSuggestions] = useState([]);


    const dispatch = useDispatch();

    //Dispatch an action
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }


    //Debouncing 
    useEffect(() => {

        //Make an API call after every key press
        //but if the diff btw 2 key press is <200ms - decline the call

        const timer = setTimeout(() => getSearchSuggestions(), 200);

        //At everykey press it tries to clear timer
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);


    const getSearchSuggestions = async () => {
        console.log(searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
    }

    return (
        <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
            <div className='flex col-span-1'>

                {/* Hamburger Icon */}
                <img className="h-8 cursor-pointer"
                    onClick={() => toggleMenuHandler()}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
                    alt="hamburger-menu" />

                {/* Youtube logo */}
                <a href="/">
                    <img className="h-8 mx-2 cursor-pointer"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="youtube-logo" />
                </a>
            </div>

            {/* Search and text box */}
            <div className='col-span-10 px-10'>
                <div>
                    <input className="p-1 px-5 rounded-l-full w-1/2 border border-gray-400" type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className="rounded-r-full border border-gray-400 px-5 bg-gray-100  p-1">🔍 </button>
                </div>

                <div className='fixed bg-white py-2 px-5 w-1/5 shadow-lg rounded-lg border border-gray-100'>
                    <ul>
                        {suggestions.map((s) => (

                            <li className='py-2 shadow-md hover:bg-gray-200'>🔍 {s}</li>
                        ))}

                    </ul>
                </div>
            </div>

            {/* UserIcon */}
            <div className='col-span-1'>
                <img className="h-10"
                    src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user-icon" />
            </div>

        </div>
    )
}

export default Head