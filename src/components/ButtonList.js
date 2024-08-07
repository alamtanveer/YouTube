import React from 'react';
import Button from './Button';

const ButtonList = () =>{
    const list = ["All", "Gaming", "Songs","Live","Soccer","Cricket","Cooking","Valentines", "News"];
    return (
    <div className='flex'>
        {list.map((item, index)=><Button key={index} name={item}/>)}
    </div>
    )
}

export default ButtonList;