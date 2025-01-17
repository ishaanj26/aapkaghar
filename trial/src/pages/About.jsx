import React from "react";

export default function About() {
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
                    <button className=" cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us</button>
                </div>
            </div>
        </div>
    );
}