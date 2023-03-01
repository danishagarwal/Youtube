import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Live", "TV", "Movies", "Development", "Cricket", "Valentines", "Cooking", "Guitar", "Game shows", "Mantras"];

const ButtonsList = () => {
    return (
        <div className='flex'>
            {list.map((buttonn) => <Button name={buttonn}></Button>)}
        </div>

    )
}

export default ButtonsList