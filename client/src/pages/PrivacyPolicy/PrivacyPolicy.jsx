import { useNavigate } from "react-router";
import { useState } from "react";

import {privacyPolicies} from '../../data'
import Footer from "../../components/Footer/Footer";

export default function PrivacyPolicy() {
    const [selectedSection, setSelectedSection] = useState('Terms');
    const navigate = useNavigate();

    return (
        <div>
        <div className="min-h-screen my-20 bg-gray-50 flex flex-col items-center">
            <header className="bg-white shadow w-full">
                <div className="container mx-auto py-6 px-4 text-center">
                    <h1 className="mb-2 text-4xl font-bold text-gray-800">Privacy Policy</h1>
                    <p className="text-gray-500">
                        <span className="hover:text-blue-600 cursor-pointer" onClick={() => navigate('/')}>Home</span>  &gt; Privacy Policy
                    </p>
                </div>
            </header>
            <div className="my-2 grid grid-cols-1 md:grid-cols-4 justify-items-center">
                <div className="mt-10">
                    <ul className="text-lg font-semibold">
                        {privacyPolicies.map((option, index) => (
                            <li key={index} className="mb-4">
                                <button
                                    onClick={() => setSelectedSection(option.value)}
                                    className={`py-2 px-4 rounded-lg text-[15px]  text-left ${selectedSection === option.value ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}`}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="my-5 max-w-[60vw] md:max-w-[40vw] col-span-3">
                    <div>
                        <h2 className="text-center text-2xl font-bold mb-2">
                            {privacyPolicies.find((term) => term.value === selectedSection).value}
                        </h2>
                        <p>{privacyPolicies.find((term) => term.value === selectedSection).content}</p>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
            </div>

    );
}