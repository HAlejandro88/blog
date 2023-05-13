import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import PostPage from "../pages/PostPage";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/post" element={<PostPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter