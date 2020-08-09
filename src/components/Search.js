import React from 'react'

function search({handleInput}) {
    return (
        <section className="search-box-wrap">
            <input type="text" placeholder="Search for a movie..." className="search-box" onChange={handleInput}/>
        </section>
    )
}

export default search;
