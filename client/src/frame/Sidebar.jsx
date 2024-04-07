// import React from 'react'
import React, { useState } from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsSlack, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsBookHalf }
    from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header' size='1em' /> MY  PROJECT
                </div>
                <span className='close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="./">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillArchiveFill className='icon' /> Project
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsSlack className='icon' /> Presentation
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/User">
                        <BsPeopleFill className='icon' /> User
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsListCheck className='icon' /> Marks
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsBookHalf className='icon' /> Assetments
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> Setting
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar