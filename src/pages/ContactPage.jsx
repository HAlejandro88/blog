import NavBarComponent from "../components/NavBarComponent";


const ContactPage = () => {
    return (
        <>
            <NavBarComponent/>
            <h2 className="text-xl font-bold mb-4 flex justify-center mt-5">Contact Us</h2>s
            <main className="w-screen h-screen bg-black flex justify-center">

                <div className="flex justify-between gap-4 items-center">
                    <div className="">
                        <h3 className="text-lg font-medium">Phone</h3>
                        <p className="text-gray-600">1-800-555-5555</p>
                    </div>
                    <div className="self-end">
                        <p className="text-gray-600">@Powered by Tesla</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Address</h3>
                        <p className="text-gray-600">123 Main St. Anytown, USA</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactPage