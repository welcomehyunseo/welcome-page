import {
  IconBookOpen,
  IconCloudLightning,
  IconGrid,
  IconMail,
  IconMessageSquare,
  IconMoon,
  IconSearch,
} from './icons'

import React from 'react'
import { PageMap, type Page } from './page-map'

function App() {
  const [count, setCount] = React.useState(0)
  const pages: Page[] = PageMap;

  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center gap-2 items-center bg-gray-100">
      <header className="max-w-5xl w-full max-h-fit flex flex-wrap md:flex-row gap-2 justify-between center-between flex-grow">
        <div className="flex flex-row gap-2">
          <a className="h-11 aspect-square bg-white rounded-sm flex items-center justify-center p-2 tracking-wide rounded-sm shadow-sm">
            <IconGrid className="w-full h-full text-grey-300 cursor-pointer" />
          </a>
          <a className="h-11 aspect-square bg-white rounded-sm flex items-center justify-center p-2 tracking-wide rounded-sm shadow-sm">
            <IconMessageSquare className="text-grey-300 cursor-pointer" />
          </a>
          <a className="h-11 aspect-square bg-white rounded-sm flex items-center justify-center p-2 tracking-wide rounded-sm shadow-sm">
            <IconMoon className="text-grey-300 cursor-pointer" />
          </a>
        </div>
        <div className="flex flex-row gap-2">
          <a className="h-11 aspect-square bg-white rounded-sm flex items-center justify-center p-2 tracking-wide rounded-sm shadow-sm">
            <IconCloudLightning className="text-grey-300 cursor-pointer" />
          </a>
          <a className="min-w-[155px] h-11 text-sm font-medium text-gray-500 tracking-wide bg-white px-3 py-2 rounded-sm shadow-sm flex items-center">
            Seoul, South Korea
          </a>
        </div>
      </header>
      {/* Center Section */}
      <section className="max-w-5xl w-full max-h-fit flex flex-col gap-4 place-content-center place-items-center flex-grow px-5 py-6 bg-white rounded-md">
        {/* Hero Image */}
        <div className="relative">
          <img
            src="/welcome-page/371f7383a25e4f7994b79c37a9f4536f.jpg"
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
          className="cursor-pointer text-sm font-bold px-3 py-1.5 rounded border-2 border-transparent 
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

      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <section className="min-w-2xs md:min-w-auto flex flex-col md:flex-row text-left bg-white rounded-md">
          <div className="flex-1 p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <IconBookOpen className="h-7 aspect-square" />
              <span>README</span>
            </h2>
            <p className="text-gray-600">Hi, I'm Henrick.</p>
            <p className="text-gray-600 mt-4">I build high-performance systems, explore core architectures, and write software from scratch. Step inside to see what I'm working on.</p>
          </div>
        </section>
        <section className="min-w-2xs md:min-w-auto flex flex-col md:flex-row text-left bg-white rounded-md">
          {/* Social */}
          <div className="flex-1 p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <IconMail className="h-7 aspect-square" />
              <span>Social</span>
            </h2>
            <p className="text-gray-600">Check out my networks</p>
            <ul className="list-none p-0 grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
              <li className="flex-1 max-h-fit ">
                <a
                  href="https://github.com/welcomehyunseo"
                  target="_blank"
                  className="h-9 flex items-center gap-2 px-3 py-1.5 rounded bg-gray-100 
                           hover:shadow-lg transition-shadow duration-300 no-underline text-gray-800 
                           justify-center"
                >
                  GitHub
                </a>
              </li>
              <li className="flex-1 max-h-fit ">
                <a
                  href="#"
                  target="_blank"
                  className="h-9 flex items-center gap-2 px-3 py-1.5 rounded bg-gray-100 
                           hover:shadow-lg transition-shadow duration-300 no-underline text-gray-800 
                           justify-center"
                >
                  Discord
                </a>
              </li>
              <li className="flex-1 max-h-fit ">
                <a
                  href="#"
                  target="_blank"
                  className="h-9 flex items-center gap-2 px-3 py-1.5 rounded bg-gray-100 
                           hover:shadow-lg transition-shadow duration-300 no-underline text-gray-800 
                           justify-center"
                >
                  Instagram
                </a>
              </li>
              <li className="flex-1 max-h-fit ">
                <a
                  href="#"
                  target="_blank"
                  className="h-9 flex items-center gap-2 px-3 py-1.5 rounded bg-gray-100 
                           hover:shadow-lg transition-shadow duration-300 no-underline text-gray-800 
                           justify-center"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="max-w-5xl w-full flex flex-col gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div className="sm:col-span-2 flex flex-row justify-start items-center text-left bg-white p-5 rounded-md">
          <p className='text-bold text-lg whitespace-nowrap'>Projects</p>
          <p className='px-3'>|</p>
          <IconSearch className="w-7 h-7 text-gray-400 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search items..."
            className="w-full text-lg bg-transparent text-gray-900 placeholder-gray-400 mt-1 focus:outline-none"
          />
        </div>
        <div className="hidden sm:hidden md:block"></div>
        {pages.map((page: Page, i: number) => (
          <section
            key={i}
            className="min-w-2xs md:min-w-auto flex flex-col md:flex-row text-left bg-white rounded-md cursor-pointer 
             transition-all duration-200 ease-out
             hover:-translate-y-1 hover:shadow-md 
             active:translate-y-0 active:scale-[0.98]">
            {/* 1. Make this wrapper 'relative' and 'overflow-hidden' to clip the contents */}
            <div className="relative group overflow-hidden rounded-md aspect-video w-full bg-gray-100">

              {/* 2. Your image scales up nicely to fill the card */}
              <img
                src={page.thumbnail}
                alt="Thumbnail"
                className='w-full h-full object-cover'
              />

              {/* 3. Absolute overlay container */}
              {/* 'inset-0' stretches it over the image. 'bg-gradient-to-t' adds a dark shadow at the bottom for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">

                {/* 4. Your Text Over the Image */}
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                  {page.category || "Article"}
                </span>
                <h3 className="text-white font-bold text-lg leading-snug drop-shadow-md">
                  {page.title || "Untitled Document"}
                </h3>

              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default App