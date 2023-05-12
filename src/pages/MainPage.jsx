import HeaderComponent from "../components/HeaderComponent";
import NavBarComponent from "../components/NavBarComponent";
import NewsComponent from "../components/NewsComponent";
import CollectionNews from "../components/CollectionNews";


const MainPage = () => {


    return (
        <div className="container mx-auto px-4">
            <NavBarComponent/>
            <HeaderComponent/>
            <NewsComponent/>
            <CollectionNews/>
        </div>
    )
}


export default MainPage