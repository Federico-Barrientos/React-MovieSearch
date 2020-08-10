import React from 'react'

function search({handleInput, search}) {
    return (
        <section className="search-box-wrap">
            <input type="text" placeholder="Search for a movie..." className="search-box" onChange={handleInput} onKeyPress={search}/>
        </section>
    )
}

export default search;
