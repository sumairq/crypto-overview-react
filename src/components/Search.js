import React from 'react'

const Search = ({handleChange}) => {
  return (
    <div>
        <h1>Search a crypto</h1>
        <form>
            <input type="text" placeholder='Search' onChange={handleChange} />
        </form>
    </div>
  )
}

export default Search
