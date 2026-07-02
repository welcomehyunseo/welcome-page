import iconGithub from './assets/github.svg';

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center gap-2 items-center bg-gray-100">
      {/* Center Section */}
      <section className="max-w-3xl w-full max-h-fit flex flex-col gap-4 place-content-center place-items-center flex-grow px-5 py-6 bg-white rounded-md">
        {/* Hero Image */}
        <div className="relative">
          <img
            src="/p-198289.jpg"
            alt="Henrick"
            className="w-[170px] h-[170px] rounded-full object-cover relative z-0"
          />
        </div>

        {/* Welcome Text */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Welcome Page!</h1>
          <p className="text-base md:text-lg">
            This is <code className="bg-gray-100 px-1.5 py-0.5 rounded">Henrick</code>'s page.
          </p>
        </div>

        {/* Counter Button */}
        <button
          type="button"
          className="cursor-pointer text-sm px-3 py-1.5 rounded border-2 border-transparent 
             bg-purple-500 text-white hover:bg-purple-600 
             focus-visible:outline-2 focus-visible:outline-purple-500 
             focus-visible:outline-offset-2 transition-all duration-300 mb-6
             hover:shadow-lg hover:scale-105
             w-[107px]"
          onClick={() => setCount((count) => Math.min(count + 1, 999))}
        >
          Count is {count}
        </button>
      </section>

      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <section className="flex flex-col md:flex-row text-left bg-white rounded-md">
         
        </section>
        <section className="flex flex-col md:flex-row text-left bg-white rounded-md">
          {/* Social */}
          <div className="flex-1 p-6 md:p-8">
            <svg className="w-[22px] h-[22px] mb-4" role="presentation" aria-hidden="true">
              <use href="/icons.svg#social-icon"></use>
            </svg>
            <h2 className="text-xl font-semibold">Connect with us</h2>
            <p className="text-gray-600">Join the Vite community</p>
            <ul className="list-none p-0 flex gap-2 mt-8 flex-wrap">
              <li className="flex-1 min-w-[calc(50%-8px)]">
                <a
                  href="https://github.com/vitejs/vite"
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-1.5 rounded bg-gray-100 
                           hover:shadow-lg transition-shadow duration-300 no-underline text-gray-800 
                           justify-center"
                >
                  <svg src={iconGithub} className="w-[18px] h-[18px]" role="presentation" aria-hidden="true">
                  </svg>
                  GitHub
                </a>
              </li>
              <li className="flex-1 min-w-[calc(50%-8px)]">
                <a
                  href="https://chat.vite.dev/"
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-1.5 rounded bg-gray-100 
                           hover:shadow-lg transition-shadow duration-300 no-underline text-gray-800 
                           justify-center"
                >
                  <svg className="w-[18px] h-[18px]" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
              <li className="flex-1 min-w-[calc(50%-8px)]">
                <a
                  href="https://x.com/vite_js"
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-1.5 rounded bg-gray-100 
                           hover:shadow-lg transition-shadow duration-300 no-underline text-gray-800 
                           justify-center"
                >
                  <svg className="w-[18px] h-[18px]" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
              <li className="flex-1 min-w-[calc(50%-8px)]">
                <a
                  href="https://bsky.app/profile/vite.dev"
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-1.5 rounded bg-gray-100 
                           hover:shadow-lg transition-shadow duration-300 no-underline text-gray-800 
                           justify-center"
                >
                  <svg className="w-[18px] h-[18px]" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App