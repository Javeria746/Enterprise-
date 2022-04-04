import React from 'react'

import { Link, Outlet } from 'react-router-dom';

function Products() {
  return (
      <>
    <div>
        <input type = 'search' placeholder='search products' />
    </div>
    <nav>
    <Link to = 'featured'> featured products
    </Link>   
    <Link to = 'new'>New products
    </Link> 
     </nav>
     <Outlet />
  </>
  )
}

export default Products