import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import PostPage from "../pages/PostPage";
import ContactPage from "../pages/ContactPage";


const AppRouter = () => {
    return (
        <BrowserRouter basename="/blog-app">
            <div>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/post" element={<PostPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter