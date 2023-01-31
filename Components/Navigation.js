import React from 'react'
import img from "../Assets/Popcorn.png"




const Navigation = () => {
  return (
    <div>
      <div class="topnav">
      <img className='logo' src={img} alt="404"></img>
      <a class="active" href="#home">Home</a>
      <a href="#contact">Movie</a> 
    
      <div className='newslatter'>
        <form>
        <input type="text" placeholder='Search'/>
        <input type="button" value="Search"/>
        </form>
      </div>
      
   </div>
   </div>
   
  )
}

export default Navigation