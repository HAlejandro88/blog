import NavBarComponent from "../components/NavBarComponent";
import {useEffect, useState} from "react";
import {useForm} from "../hooks/useForm";

const PostPage = () => {



    const initPost = [{
        title: "First Post",
        description: "Lorem Ipsum es simplemente"
    }]
    const [posts, setPosts] = useState(initPost);

    const [formValues, handleFormValues] = useForm(
        {
        title: '',
        description: ''
    })

    const createPost = (event) => {
        event.preventDefault()
        let newPost = {
            title: formValues.title,
            description: 'ss'
        }
        setPosts([...posts,newPost])
        closeForm(event)
    }
    const closeForm = (event) => {
        event.preventDefault()
        const open = document.getElementById('open')
        const form = document.querySelector('form')
        form.style.display = 'none'
        open.style.display = 'block'
    }

    const openPost = (event) => {
        event.preventDefault()
        const open = document.getElementById('open')
        const form = document.querySelector('form')
        form.style.display = 'block'
        open.style.display = 'none'
    }

    return (
        <div className="bg-black">
            <NavBarComponent/>
            <main className="h-screen mt-5">
                <h2 className="flex justify-center mb-5">Posts</h2>

                <div className="grid grid-cols-4 gap-4">
                    {
                        posts.map((post, index) => <div key={index} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img className="h-full w-full object-cover md:w-48" src="https://wallpapercave.com/wp/wp2964349.jpg" alt="Imagen de la carta"/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-black font-semibold">
                                        { post.title  }
                                    </div>
                                    <p className="mt-2 text-gray-500">{ post.description }</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="flex justify-center ">
                    <form className="flex flex-col" style={{display: 'none'}} >
                        <input type="text" className="w-full h-9 mr-2 py-2 px-3 mt-2 border border-gray-300 rounded-md text-black" placeholder="Text your Title" name="title" value={formValues.title} onChange={handleFormValues}/>
                        <input type="text" className="w-full h-9 mr-2 py-2 px-3 mt-2 border border-gray-300 rounded-md text-black" placeholder="Text your Description" name="description" value={formValues.description} onChange={handleFormValues}/>
                        <button className="bg-black mt-2 border-white text-white border-2 rounded-md px-4 py-2 hover:bg-white hover:text-black hover:border-black" onClick={createPost}>
                            Save
                        </button>
                        <button className="bg-red-600 mt-2 border-black text-white border-2 rounded-md px-4 py-2 hover:bg-red-500 hover:text-black hover:border-black" onClick={closeForm} >
                            Close Form
                        </button>
                    </form>
                    <button className="bg-black mt-5 rounded-full border-white text-white border-2 rounded-md px-4 py-2 hover:bg-white hover:text-black hover:border-black" id="open" onClick={openPost}>
                        Create a new Post
                    </button>
                </div>
            </main>

        </div>
    )
}


export default PostPage
