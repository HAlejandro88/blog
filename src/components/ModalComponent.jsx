


const ModalComponent = () => {

    const openModal = () => {
        document.getElementById("myModal").classList.remove("hidden");
    }

    const closeModal = () => {
        document.getElementById("myModal").classList.add("hidden");
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={openModal}>
                    Abrir Modal
                </button>


                <div className="fixed z-10 inset-0 overflow-y-auto hidden" id="myModal">
                    <div className="flex justify-center items-center min-h-screen px-4">

                        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>


                        <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md mx-auto p-6">
                            <div className="mb-4">
                                <h2 className="text-lg font-bold text-gray-800">Modal con formulario</h2>
                            </div>

                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="nombre">
                                        Nombre
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="nombre"
                                        type="text"
                                        placeholder="Nombre"/>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="correo">
                                        Correo electrónico
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="correo"
                                        type="email"
                                        placeholder="Correo electrónico"/>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                        type="submit">
                                        Enviar
                                    </button>
                                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={closeModal}>
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalComponent