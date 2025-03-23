import { useNavigate } from "react-router"
import Footer from "../../components/Footer/Footer"
import { OUR_SERVICES } from "../../data"
import { ServicePlate } from "../Home/Services/Services"

export default function OurServices() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="min-h-screen my-20 bg-gray-50 flex flex-col items-center">
                <header className="bg-white shadow w-full">
                    <div className="container mx-auto py-6 px-4 text-center">
                        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
                        <p className="text-gray-500"><span className="hover:text-blue-600 cursor-pointer" onClick={() => { navigate('/') }}>Home</span>  &gt; Our Services</p>
                    </div>
                </header>
                <div className="flex flex-col xl:flex-row gap-5">
                    {OUR_SERVICES.map(({ img, title, description }, index) => {
                        return (<ServicePlate key={index} img={img} title={title} description={description} />)
                    })}

                </div>
            </div>
            <Footer />
        </div>
    )
}