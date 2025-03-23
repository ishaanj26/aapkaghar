import { useNavigate } from "react-router"
import Footer from "../../components/Footer/Footer"
import { pricingPlans } from "../../data"

export default function () {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen">
            <div className="bg-gray-50 flex flex-col items-center">
                <header className=" mt-20 bg-white shadow w-full">
                    <div className="container mx-auto py-6 px-4 text-center">
                        <h1 className="text-4xl mb-3 font-bold text-gray-800">Pricing Plans</h1>
                        <p className="text-gray-500"><span className="hover:text-blue-600 cursor-pointer" onClick={() => { navigate('/') }}>Home</span>  &gt; Pricing Plans</p>
                    </div>
                </header>
            </div>
            <div className=" flex justify-center items-center bg-gray-100">
                <div className="m-20  max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-6  rounded-lg shadow-lg ${plan.popular ? 'bg-blue-500 text-white scale-[110%]' : 'bg-white hover:scale-105'
                                }`}
                        >
                            {plan.popular && (
                                <div className="text-sm font-bold uppercase mb-2">Most Popular</div>
                            )}
                            <h2 className="text-2xl font-bold mb-4">{plan.price}</h2>
                            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                            <ul className="mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center mb-2">
                                        <span className="mr-2">✔️</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`justify-end py-2 px-4 rounded ${plan.popular ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'
                                    }`}
                            >
                                Choose The Package
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
