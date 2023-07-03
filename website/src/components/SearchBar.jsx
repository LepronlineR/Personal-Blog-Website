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
        setValue(searchValue);
    }

    return (
    <div className="bg-transparent p-2 shadow-md block">
        <div className="flex">
            <button onClick={() => onSearch(value)}>
                <FontAwesomeIcon
                icon={faSearch} color="#A5E1AD" 
                className="w-10"/>
            </button>
            <input 
                className="bg-gray rounded-xl text-xl text-center"
                placeholder="search for an article"
                value={value}
                onChange={onChange}
            />
        </div>
        <div 
            className="bg-gray flex flex-col"
        >
            {data.filter(item => {
                const search  = value.toLowerCase();
                const articleName = item.article_name.toLowerCase();

                return search && articleName.startsWith(search);
            })
            .slice(0, 6)
            .map((item) => (
                <a 
                    className="cursor-pointer text-left m-3"
                    href={`blog/${item.article_id}`}
                    key={item.article_id}
                >
                    {item.article_name}
                </a>
            ))}
            
        </div>
    </div>
  )
}

export default SearchBar