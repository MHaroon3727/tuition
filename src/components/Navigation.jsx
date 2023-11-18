import React from 'react'
function Navigation() {
  return (
    <>
<nav>
  
  <input type='checkbox' id="check" name='' value=""/>
    <label for="check" id='checkbtn'>
      <i className="ri-menu-3-line">
        <img src='/images/menu-3-line.png'/>
      </i>
    </label>
    <label className="logo">
      <img src="./images/logo.png" alt="Logo" />
    </label>
      <ul>
       <li>< a  href="#program">Programs</a> </li>
       <li>< a  href="#reviews">Reviews</a> </li>
       <li>< a  href="#features">Features</a> </li>
       <li>< a  href="#section4">Teaching</a> </li>
       <div className='nav-button'>
          <button>FreeMasterClasses</button>
        </div>
      </ul>
</nav>





</>
  )
}

export default Navigation



