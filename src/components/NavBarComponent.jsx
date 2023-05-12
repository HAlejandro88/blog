import SearchComponent from "./SearchComponent";
import LogoComponent from "./LogoComponent";


const NavBarComponent = () => {
    return (
        <div className="flex justify-around mt-2">
            <LogoComponent/>
            <ul className="flex justify-center gap-4 bg-red-100 w-1/3">
                <li className="">Home</li>
                <li className="">About</li>
                <li className="">Blog</li>
                <li className="">Contact</li>
            </ul>
            <SearchComponent/>
        </div>
    )
}


export default NavBarComponent