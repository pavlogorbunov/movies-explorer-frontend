import React from 'react';
import './navtab.css';

function NavTab() {
    return (
        <div className='navtab'>
            <a className='navtab__button' href="#aboutproject">О проекте</a>
            <a className='navtab__button' href='#techs'>Технологии</a>
            <a className='navtab__button' href='#aboutme'>Студент</a>
        </div>
    )
}

export default NavTab;