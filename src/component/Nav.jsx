import React from 'react'

 const Nav = ({textdata}) => {
  return (
    <div>
        <nav class="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a href='#' className="navbar-brand">Home Service</a>
    <form className="d-flex">
      <input className="form-control me-2" 
      type="search" placeholder="Search"
       aria-label="Search"
       onChange={(e)=>{textdata(e.target.value)}}
       />
      
    </form>
  </div>
</nav>
    </div>
  )
}
export default Nav;