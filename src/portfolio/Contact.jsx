import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 p-6 text-white"
        >
            <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
                {/* Header */}
                <div className="pb-10 text-center">
                    <p className="text-5xl font-bold inline border-b-4 border-gray-500">
                        Contact Me
                    </p>
                    <p className="py-6 text-xl text-gray-300">
                        I AM AT YOUR SERVICE
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Phone */}
                    <div className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <FiPhone className="text-5xl text-blue-400 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2 border-b-2 border-gray-500">
                            Call Us On
                        </h3>
                        <p className="text-gray-300 text-lg mt-2">+251 949 496 106</p>
                    </div>

                    {/* Email */}
                    <div className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <FiMail className="text-5xl text-green-400 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2 border-b-2 border-gray-500">
                            Email
                        </h3>
                        <p className="text-gray-300 text-lg mt-2">desalegnaw@gmail.com</p>
                    </div>

                    {/* Address */}
                    <div className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <FiMapPin className="text-5xl text-red-400 mb-4" />
                        <h3 className="text-2xl font-semibold mb-2 border-b-2 border-gray-500">
                            Address
                        </h3>
                        <p className="text-gray-300 text-lg mt-2">Addis Abeba, Ethiopia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
