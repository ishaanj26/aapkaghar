import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name == '' || email == '' || phone == '' || subject == '' || message == '') {
            return setError("Enter the complete information")
        }

        // axios.post('http://localhost:3000/send-email', {
        //     name,
        //     email,
        //     phone,
        //     subject,
        //     message,
        // })
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

    };
    return (
        <div>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name*
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address*
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number*
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="ex 012345678"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Subject*
                    </label>
                    <input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter Keyword"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Message"
                        style={{ resize: "none" }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Send Message
                </button>
                {error && <p className='text-blue-500 text-center'>{error}</p>}
            </form>
        </div>
    )
}