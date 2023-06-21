import React, { useState } from 'react';
import "./_header.scss"

import {FaBars } from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications, MdApps} from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header({handleToggleSidebar}) {

    const [input,setInput] = useState("")

    const history = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        history(`/search/${input}`)
    }

    const user = useSelector(state => state.auth?.user)

    return (
        <div className='border border-dark header'>
            
        <FaBars className='header__menu' size={26} 
            
            onClick={()=>handleToggleSidebar()}
        />

        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Light_logo_of_YouTube_%282015-2017%29.svg/1024px-Light_logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
            className="header__logo"
        />
        
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Search' value={input} onChange={e=>setInput(e.target.value)}/>
            <button type='submit'>
                <AiOutlineSearch size={22} />
            </button>
            </form>

        <div className="header__icons">
            <MdNotifications size={28}/>
            <MdApps size={28}/>
            <img 
                src={user?.photoURL}
                alt="avatar" 
            />

        </div>

        </div>
    );
}

export default Header;