import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col p-5">
            <div className="flex col-span-1">
                <img onClick={()=>toggleMenuHandler()} className="h-8 cursor-pointer" alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///8AAADV1dVWVlaenp5eXl6Ojo6qqqrz8/PY2Nijo6PIyMiVlZXj4+Pp6embm5tsbGwaGho2NjZnZ2ceHh4jIyOAgIDPz888PDx6enpNkGGAAAABh0lEQVR4nO3daW4CMQwG0CmFwrBvZbn/RUuLVKk/yozkkRzCeyfwJyAJUuw0DQAAAAAAAAAAAADwx3ozeS/TZLMeIuDHW8k+4gEP2Rk6bKMB59kJOk1jAWfH7ACdPmehhIvs+ntYhBIus8vvYRlKWPZCehdbTqfZ5fcQW2pW2eX3sAolbCbZ9XeaxAI26+wAncIHtzY7QYc2GvC26Z922Sn+tTvFtvvfjO2oTO0w+QAAAAAAAAAAgNcymo/LNB8Nkm+xz7699sA+dsn7R+ntCMFmhGe4rH8OJiz5K3p3iQUcZdffQ2y5GWeX38M4lLD+fov6P8P6f4dPsJbuYwGbc3aATtH9sPjOp/CZ5naquWSHeGCIc2lT/38LAAAAAAAAAADgtdQ+g3Z2LXiO8HWAjKXfoQ3Pgi5/KHt0nnf5M9kPtX+E0bn6pd8Q/ha7JVx/v0X9b5SU37oWfWfmCd4KOgY3/dIbLAdoR9hmJ+gQfrOr9MVmgHfXXuDtPAAAAAAAAAAAAACoyRdvvChbuiAxGgAAAABJRU5ErkJggg==" />
                 <a href="/">
                     <img className="h-8 mx-2" alt="logo" src="data:image/png;base64,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" />
                 </a>
            </div>
            <div className="col-span-10 px-10">
                <input type="text" className="w-1/2 border border-gray-400 p-2 rounded-l-full"/>
                <button className="border border-gray-400 p-2 rounded-r-full">Search</button>
            </div>
            <div className="col-span-1">
                <img className="h-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            </div>
        </div>
    )
}

export default Head;