import React, { useState } from "react";

export default function About() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleContactClick = () => {
        setIsFormVisible(true);
    };
    const handleFormClose = () => {
        setIsFormVisible(false);
    };
    const formSubmit = () => {

    }
    return (
        <div className="bg-white shadow-md; max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            <div className="text-center bg-gray-100 py-12">
                <h1 className="text-gray-900; text-4xl font-bold text-center mb-4">Welcome to AapkaGhar</h1>
                <p className="text-lg text-gray-600 mb-8">
                    AapkaGhar is a property brokering company founded by Anuj Jain, dedicated to providing a seamless and trustworthy experience for individuals and families looking to buy, sell, or rent properties.
                </p>
            </div>

            <div className="py-12">
                <h2 className=" text-gray-900 text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg mb-8">
                    AapkaGhar was established with the goal of revolutionizing the property brokering industry by providing personalized and professional services to our clients.
                    Our team is dedicated to understanding the unique needs and preferences of each client, ensuring that we find the perfect property for them.
                </p>

                <div className="bg-gray-100 py-12">
                    <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className=" rounded-lg bg-white shadow-md p-4">
                            <h3 className="text-gray-900 text-lg font-bold mb-2">Personalized Service</h3>
                            <p className="text-gray-600 text-lg mb-4">Our team is dedicated to understanding your unique needs and preferences.</p>
                        </div>
                        <div className="rounded-lg bg-white shadow-md p-4">
                            <h3 className="text-gray-900 text-lg font-bold mb-2">Professional Expertise</h3>
                            <p className="text-gray-600 text-lg mb-4">Our team has extensive knowledge of the property market and can guide you through the process.</p>
                        </div>
                        <div className="rounded-lg bg-white shadow-md p-4">
                            <h3 className="text-gray-900 text-lg font-bold mb-2">Trustworthy Experience</h3>
                            <p className="text-gray-600 text-lg mb-4">We are committed to providing a seamless and trustworthy experience for our clients.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 text-center py-12">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Get Started Today</h2>
                    <p className="text-lg mb-8 text-gray-600">Contact us to learn more about our services and how we can help you find your dream property.</p>
                    <button onClick={handleContactClick} className=" cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
                </div>
                {isFormVisible && (
                    <div
                        className={`fixed bottom-0 right-0 bg-white shadow-md p-4 w-1/2 md:w-1/3 lg:w-1/4 transition-all duration-500 ${isFormVisible ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <button
                            className="absolute top-4 right-4 cursor-pointer"
                            onClick={handleFormClose}
                        >
                            ×
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <form onSubmit={formSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    className="block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    className="block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    required
                                    id="message"
                                    className="block w-full p-2 border border-gray-300 rounded"
                                    rows="3"
                                    style={{ resize: "none" }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}