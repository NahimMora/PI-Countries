import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import Style from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
      <div className={Style.nav}>
        <img src="https://imgs.search.brave.com/zPC5WrXUHo8jFEHMNh-M7lvpY2elgF-r3Nri7BDvYvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmdlb2VuY2ljbG9w/ZWRpYS5jb20vZXMv/cG9zdHMvNi83LzQv/YXJnZW50aW5hXzQ3/Nl84XzYwMC5qcGc" alt="Argentina" />
        
        <a href="/">Back</a>
        <a href="/create">Create</a>

        <div className={Style.searchBar}>
          <SearchBar/>
        </div>
      </div>
    </>
  )
}

export default NavBar