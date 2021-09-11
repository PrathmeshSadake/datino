import React from "react";
import Link from "next/link";

const Header = ({ data }) => {
  return (
    <nav class="space-x-4 md:space-x-6">
      {/* {data.map((e) => (
        <a
          href="javascript:void(0)"
          class="font-semibold text-gray-900 hover:text-gray-500"
        >
          <span>{e.name}</span>
        </a>
      ))} */}
      <Link href="/contact">
        <a class="font-semibold text-gray-900 hover:text-gray-500">
          <span>Contact</span>
        </a>
      </Link>
    </nav>
  );
};

export default Header;
