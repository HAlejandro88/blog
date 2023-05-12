


const SearchComponent = () => {
    return (
        <div className="flex w-1/3 justify-end">
            <input type="text" className="w-1/2 mr-2 py-2 px-3 border border-gray-300 rounded-md" placeholder="Find your image"/>
            <button className="py-2 px-4 bg-black text-white rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black-600 focus:ring-opacity-50">
                Search
            </button>
        </div>

)
}


export default SearchComponent