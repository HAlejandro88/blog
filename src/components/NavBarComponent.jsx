import SearchComponent from "./SearchComponent";
import LogoComponent from "./LogoComponent";


const NavBarComponent = () => {
    return (
        <div className="flex justify-around mt-2">
            <LogoComponent/>
            <ul className="flex justify-around ">
                <li className="mr-2">Home</li>
                <li className="mr-2">About</li>
                <li className="mr-2">Blog</li>
                <li className="mr-2">Contact</li>
            </ul>
            <SearchComponent/>
        </div>
    )
}


export default NavBarComponent