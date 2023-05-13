import SearchComponent from "./SearchComponent";
import LogoComponent from "./LogoComponent";
import {Link} from "react-router-dom";


const NavBarComponent = ({search, items}) => {
    return (
        <div className="container mx-auto px-4 flex items-center justify-evenly  bg-black">
            <LogoComponent/>
            <ul className="flex justify-center items-center gap-4  w-1/3">
                <Link to="/" className="hover:cursor-pointer">Home</Link>
                <li className="hover:cursor-pointer">About</li>
                <Link to="/post" className="hover:cursor-pointer">Blog</Link>
                <Link to="/contact" className="hover:cursor-pointer">Contact</Link>
            </ul>
            <SearchComponent search={search} items={items}/>
        </div>
    )
}


export default NavBarComponent