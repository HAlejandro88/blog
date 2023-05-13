import SearchComponent from "./SearchComponent";
import LogoComponent from "./LogoComponent";


const NavBarComponent = () => {
    return (
        <div className="container mx-auto px-4 flex items-center justify-evenly  bg-black">
            <LogoComponent/>
            <ul className="flex justify-center items-center gap-4  w-1/3">
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