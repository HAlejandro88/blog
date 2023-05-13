

const NewsComponent = () => {
    return (
        <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1">
                <h2 className="text-2xl font-bold mb-4">Título de la columna de texto</h2>
                <p className="text-md">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <img src="https://wallpapercave.com/wp/wp3544530.jpg" className="w-1/3 h-28 rounded-lg" alt="image"/>
                    <p className="text-md ml-4">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
            </div>
        </div>

)
}

export default NewsComponent