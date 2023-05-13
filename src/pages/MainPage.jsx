import HeaderComponent from "../components/HeaderComponent";
import NavBarComponent from "../components/NavBarComponent";
import NewsComponent from "../components/NewsComponent";
import CollectionNews from "../components/CollectionNews";


const MainPage = () => {


    return (
        <div className="bg-black">
            <NavBarComponent/>
            <HeaderComponent/>
            <div className="container mx-auto px-4">
                <NewsComponent/>
                <CollectionNews/>
            </div>
        </div>
    )
}


export default MainPage