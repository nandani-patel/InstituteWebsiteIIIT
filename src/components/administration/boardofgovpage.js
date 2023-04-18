import React from 'react'
import './boardofgovpage.css'
import Newnavbar from '../Navbar/newnavbar'
import Boardofgoverners from './Boardofgoverners'
import Foot from '../Footer/foot'
const Boardofgovpage = () => {
    return (
        <div className='mainbody'>
            <div className='mainnav'>
                <Newnavbar />
            </div>
            <div className='lowerbody'>
                <div className='tablebody'>
                    <h2>Board of Governers</h2>
                    <div className='boardofgov'>
                        <Boardofgoverners />
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    )
}

export default Boardofgovpage
