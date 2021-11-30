import React from 'react'
 import NavBar from '../components/NavBar/NavBar'
function NavBarView(props) {
    return (
        <>
            <NavBar/>
            {props.children}
        </>
    )
}

export default NavBarView
