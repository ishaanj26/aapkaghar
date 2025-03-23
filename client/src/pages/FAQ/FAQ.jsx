import { useState } from "react";
import { useNavigate } from "react-router";
import {FAQs} from '../../data'
import Footer from "../../components/Footer/Footer";

export default function FAQ() {
  const [activeIndices, setActiveIndices] = useState({});

  const toggleFAQ = (titleIndex, questionIndex) => {
    setActiveIndices((prevActiveIndices) => {
      const newActiveIndices = { ...prevActiveIndices };
      if (newActiveIndices[titleIndex] === questionIndex) {
        delete newActiveIndices[titleIndex];
      } else {
        newActiveIndices[titleIndex] = questionIndex;
      }
      return newActiveIndices;
    });
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen my-20  bg-gray-50 flex flex-col items-center">
        <header className="bg-white  my-5 shadow w-full">
          <div className="container mx-auto py-6 px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800">FAQs</h1>
            <p className="mb-3 text-xs text-gray-400">Frequenty Asked Questions</p>
            <p className="text-gray-500">
              <span className="hover:text-blue-600 cursor-pointer" onClick={() => { navigate('/') }}>Home</span>  &gt; FAQs
            </p>
          </div>
        </header>
        <div className="space-y-4 mt-4">
          {FAQs.map((faq, titleIndex) => (
            <div key={titleIndex}>
              <h2 className="font-medium text-2xl mx-2 my-10">{faq.title}</h2>
              {faq.questions.map((question, questionIndex) => (
                <div
                  key={questionIndex}
                  className="my-2 border rounded-lg shadow-sm overflow-hidden transition-all duration-300"
                >
                  <div
                    className=" flex justify-between items-center bg-gray-100 px-4 py-3 cursor-pointer"
                    onClick={() => toggleFAQ(titleIndex, questionIndex)}
                  >
                    <h2 className="font-medium text-lg">{question.question}</h2>
                    <span className="text-xl">
                      {activeIndices[titleIndex] === questionIndex ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className={`px-4 py-3 text-gray-600 bg-white ${activeIndices[titleIndex] === questionIndex ? "max-h-40" : "max-h-0"
                      } overflow-hidden transition-all duration-300 ease-in-out`}
                    style={{
                      height: activeIndices[titleIndex] === questionIndex ? "auto" : "0",
                      opacity: activeIndices[titleIndex] === questionIndex ? 1 : 0,
                    }}
                  >
                    {question.answer}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}