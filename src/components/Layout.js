import React from 'react'

import Navbar from './Navbar1'
import Sidenav from './Sidenav1'

const Layout = ({door}) => {
  return (
   
    <div className="flex">     
      <div className="w-1/6">   
        <Sidenav />
      </div>
      <div className="w-5/6">   
        <Navbar />              
      
        {door}               
      
      
      </div>
    </div>
  )
}

export default Layout
