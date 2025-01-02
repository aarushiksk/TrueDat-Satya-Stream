import React from 'react';
import { Link } from 'react-router-dom';

const Image = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-bold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            TrueDat
          </div>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link to="/audio" className="hover:text-blue-400 transition-colors duration-300">
                Audio
              </Link>
            </li>
            <li>
              <Link to="/video" className="hover:text-purple-400 transition-colors duration-300">
                Video
              </Link>
            </li>
            <li>
              <Link to="/image" className="hover:text-pink-400 transition-colors duration-300">
                Image
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent">
            Upload Image for Fact Checking
          </h1>
          <p className="mt-4 text-lg max-w-xl">
            Submit an image file, and our advanced AI will analyze it for facts and discrepancies.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
          <form className="flex flex-col gap-4">
            <label htmlFor="imageFile" className="block text-sm font-medium text-gray-300">
              Select an image file:
            </label>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              className="block w-full text-sm text-gray-400 border border-gray-600 rounded-lg cursor-pointer bg-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 p-2"
            />
            <button type="submit">
              <a
                className="inline-block w-full rounded bg-pink-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-pink-500"
                href="#"
              >
                Upload and Analyse
              </a>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Image;