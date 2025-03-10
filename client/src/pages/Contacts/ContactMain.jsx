import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router";
import Form from "../../components/Form/Form";

const socialLinks = [
  { icon: <FaFacebook />, link: "#" },
  { icon: <FaLinkedin />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaPinterest />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
];

const ContactMainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen my-20 bg-gray-50 flex flex-col items-center">
      {/* Header Section */}
      <header className="bg-white shadow w-full">
        <div className="container mx-auto py-6 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Contacts</h1>
          <p className="text-gray-500">
            <span
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            {" > "} Contacts
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex flex-col md:flex-row w-full max-w-7xl mx-auto mt-8 px-4 gap-8">
        {/* Form Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 flex-1">
          <h2 className="text-2xl font-semibold text-gray-800">Drop Us A Line</h2>
          <p className="text-gray-600 mt-2 mb-6">
            Feel free to connect with us through our online channels for updates,
            news, and more.
          </p>
          <Form />
        </section>

        {/* Contact Info Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <div className="mt-4 text-sm text-gray-600">
            <div className="my-5">
              <p className="font-medium">Address:</p>
              <p>W-16, Green Park Main Market -110016, New Delhi, India</p>
            </div>
            <div className="my-5">
              <p className="mt-2 font-medium">Contact Information:</p>
              <p>
                9811559966 |{" "}
                <a
                  href="mailto:gluck510@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  gluck510@gmail.com
                </a>
              </p>
            </div>
            <p className="mt-2">
              <span className="font-medium">Opening Hours:</span>
            </p>
            <p>Monday - Friday: 08:00 - 20:00</p>
            <p>Saturday - Sunday: 10:00 - 18:00</p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col space-x-4 my-4 items-center">
            <p className="text-sm text-center">Follow us:</p>
            <div className="flex justify-center space-x-4 md:space-x-0">
              {socialLinks.map(({ icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="w-8 h-8 md:w-12 md:h-12 bg-white/20 rounded-md flex justify-center items-center hover:bg-blue-100 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Google Map Section */}
      <div className="my-5 w-full max-w-screen-lg">
        <iframe
          title="Location Map"
          style={{ width: "100%", height: "400px" }}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=GoodLuck%20Real%20Estate%20Property%20Consultancy%20Green%20Park%20South%20Delhi+(GoodLuck%20Real%20Estate%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
};

export default ContactMainPage;
