import React, { useState } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var data = require("../assets/article_names.json");

const SearchBar = () => {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchValue) => {
        // fetch search results
        console.log('user searched for: ', searchValue);
    }

    return (
    <div className="bg-transparent w-full rounded-lg h-15 p-2 shadow-md items-end">
        <div>
            <button onClick={() => onSearch(value)}>
                <FontAwesomeIcon
                icon={faSearch} color="#A5E1AD" 
                className="w-10"/>
            </button>
            <input 
                className="bg-gray w-auto rounded-xl border-red"
                placeholder="search for an article"
                value={value}
                onChange={onChange}
            />
        </div>
        <div >
            {data.filter(item => {
                const search  = value.toLowerCase();
                const articleName = item.article_name.toLowerCase();

                return search && articleName.startsWith(search)
            }).map((item) => (
                <div onClick="">
                    {item.article_names}
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default SearchBar