import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="text-center">
          <div className="text-sm uppercase font-bold tracking-wider mb-1 text-green-700">
            Any questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Contact Us
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            If you need any further info, feel free to get in touch and we will
            get back to your as soon as possible.
          </h3>
        </div>

        <div className="lg:w-2/3 mx-auto bg-white p-5 md:p-10 rounded-lg shadow-sm">
          <form onSubmit={()=>{}} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label htmlFor="tk-contact-firstname" className="font-medium">
                  First Name
                </label>
                <input
                  className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  type="email"
                  id="tk-contact-firstname"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="tk-contact-lastname" className="font-medium">
                  Last Name
                </label>
                <input
                  className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                  type="email"
                  id="tk-contact-lastname"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="tk-contact-email" className="font-medium">
                Email
              </label>
              <input
                className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                type="email"
                id="tk-contact-email"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="tk-contact-message" className="font-medium">
                Message
              </label>
              <textarea
                className="block border border-gray-200 rounded placeholder-gray-400 px-5 py-3 w-full focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                id="tk-contact-message"
                rows="6"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-green-700 bg-green-700 text-white hover:text-white hover:bg-green-800 hover:border-green-800 focus:ring focus:ring-green-500 focus:ring-opacity-50 active:bg-green-700 active:border-green-700"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50 hi-solid hi-paper-airplane inline-block w-5 h-5"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
