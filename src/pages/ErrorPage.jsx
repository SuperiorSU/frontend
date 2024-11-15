import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div class="h-screen bg-gray-100 flex items-center">
        <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div class="max-w-md">
            <div class="text-5xl font-dark font-bold">404</div>
            <p class="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <p class="mb-8">
              But dont worry, You can find plenty of other things on our
              Homepage.
            </p>

            <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border-transparent rounded-full focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600  border-2 border-slate-950 hover:bg-blue-700">
                <Link to="/">
                    Back to Homepage
                </Link>
            </button>
          </div>
          <div class="max-w-lg">
            <img loading="lazy" className="w-full" src="https://utfs.io/f/Fp16c7Wd5HTuJ6xGk9VH70dwr3DbxJGnUXPBskq8yI9zSOo5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
