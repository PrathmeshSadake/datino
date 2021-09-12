import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const { categories } = useSelector((state) => state.categories);
  console.log(categories);

  return (
    <header class="flex flex-none items-center bg-white py-10">
      <div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8">
        <Link href="/">
          <a class="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-green-600 hover:text-green-400">
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
            <span>Strapi Clothing</span>
          </a>
        </Link>

        <div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
          <nav>
            {categories.map((category) => (
              <Link key={category.id} href={`/${category.name}`}>
                <a
                  style={{ margin: "0 10px" }}
                  class="font-semibold text-gray-900 hover:text-gray-500"
                >
                  {category.name}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a class="font-semibold text-gray-900 hover:text-gray-500">
                <span>Contact</span>
              </a>
            </Link>
          </nav>
          <div class="flex items-center justify-center space-x-2">
            <a class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
              <span>Sign In</span>
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
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
