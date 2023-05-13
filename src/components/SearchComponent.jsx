import {useState} from "react";


const SearchComponent = ({search, items= []}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        const filterPost = items.filter(post => post.title.includes(searchTerm))
        search(filterPost);
    }


    return (
        <div className="flex w-1/3 justify-end items-center border-red-300 mt-1">
            <input type="text" className="w-1/2 h-9 mr-2 py-2 px-3 border border-gray-300 rounded-md text-black"
                   placeholder="Find your post"
                   value={searchTerm}
                   onChange={handleChange}/>
            <button className="bg-black border-white text-white border-2 rounded-md px-4 py-2 hover:bg-white hover:text-black hover:border-black" onClick={handleChange}>Search</button>
        </div>

    )
}


export default SearchComponent