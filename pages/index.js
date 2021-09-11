import axios from "axios";
import Header from "../layout/header";

export default function Home() {
  return (
    <div class="bg-white overflow-hidden">
      <header
        id="page-header"
        class="flex flex-none items-center bg-white py-10"
      >
        <div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8">
          <div>
            <a
              href="javascript:void(0)"
              class="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-green-600 hover:text-green-400"
            >
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                ></path>
              </svg>
              <span>Company</span>
            </a>
          </div>
          <div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
            <div class="flex items-center justify-center space-x-2">
              <a
                href="javascript:void(0)"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="opacity-50 hi-solid hi-login inline-block w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Sign In</span>
              </a>
              <a
                href="javascript:void(0)"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
              >
                <span>New Account</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div class="flex flex-col lg:flex-row-reverse space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div class="lg:w-1/2 lg:flex lg:items-center">
          <div>
            <div class="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded text-green-700 bg-green-200">
              New dashboard is live!
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
              Premium leads for all your SaaS projects
            </h2>
            <h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
              Focus on building your amazing service and we will do the rest. We
              grew more than 10,000 online businesses.
            </h3>
            <div class="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
              <button
                type="button"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-green-700 bg-green-700 text-white hover:text-white hover:bg-green-800 hover:border-green-800 focus:ring focus:ring-green-500 focus:ring-opacity-50 active:bg-green-700 active:border-green-700"
              >
                <span>Join us today</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200"
              >
                <span>Start a 30-day trial</span>
              </button>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 lg:mr-16 lg:flex lg:justify-center lg:items-center">
          <div class="lg:w-96 relative">
            <div class="absolute pattern-dots-xl text-green-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
            <div class="absolute pattern-dots-xl text-green-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
            <div class="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"></div>
            <div class="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
            <img
              src="https://source.unsplash.com/MChSQHxGZrQ/800x1000"
              alt="Hero Image"
              class="relative rounded-lg mx-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


