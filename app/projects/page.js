import React from "react";
import Link from "next/link";
import gammastudio from "@/public/gammastudio.png";

export default function Project() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24 px-32 pt-12 min-h-screen">
        <div className="flex relative">
          <div className="text-gray-400 place-items-center underline cursor-pointer hover:text-white text-center text-1xl drop-shadow-lg font-thin animate-bounce mx-2">
          <Link href="/cv" target="_blank"> CV </Link>

          </div>
          <div className="text-gray-400 place-items-center underline cursor-pointer hover:text-white text-center text-1xl drop-shadow-lg font-thin animate-bounce mx-2">
            <Link href="/">Home</Link>
          </div>
        </div>

        <div className="flex py-7">
          <div className="animate-pulse">
            <Link href="https://github.com/Ammaralibrahim">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="white"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.308,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15,C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </Link>
          </div>
          <div className="animate-pulse">
            <Link href="https://www.linkedin.com/in/ammar-alibrahim/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="white"
              >
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-gray-400 place-items-center underline text-center text-1xl drop-shadow-lg font-thin py-8">
          Projects
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          <div className="group lg:flex sm:grid rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <figure className="">
              <img
                src="https://i.postimg.cc/6Qhjj1FP/gammacities.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="grid px-4 max-w-lg">
              <div className="flex justify-between flex-col sm:flex-row">
                <h2 className={`mb-2 text-md font-semibold`}>Gamma Cities</h2>
                <div className="flex relative justify-center sm:justify-start">
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none max-w-xs">
                    <span className="bg-blue-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      React.js
                    </span>

                    <span className="bg-red-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Node.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Express.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      MongoDB
                    </span>
                  </span>
                </div>
              </div>

              <p className={`m-0 text-[10px] tracking-widest opacity-50`}>
                Gamma Cities is a platform providing a virtual metaverse
                experience, allowing users to explore diverse online spaces.
                Developed with technologies such as React.js and Three.js, the
                platform offers users a gaming-like immersion. It utilizes
                Node.js, Express, and Google Cloud for data storage, ensuring
                secure retention of user interactions.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-32 grid  text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          {/* React.js */}
          <a
            href="/"
            className="group lg:flex sm:grid flex-row-reverse rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="">
              <img
                src="https://i.postimg.cc/jdFLNx5g/reyhana-perfumes.png"
                alt="Shoes"
                className="rounded-xl w-34"
              />
            </figure>
            <div className="grid px-4 max-w-lg">
              <div className="flex justify-between flex-col sm:flex-row">
                <h2 className={`mb-2 text-md font-semibold`}>
                  Reyhana perfumes
                </h2>
                <div className="flex relative justify-center sm:justify-start">
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <span className="bg-blue-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      React.js
                    </span>

                    <span className="bg-red-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Node.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Express.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      MongoDB
                    </span>
                  </span>
                </div>
              </div>
              <p className={`m-0 text-[10px] tracking-widest opacity-50`}>
                Reyhana Perfumes is an online shopping platform developed using
                Next.js and Tailwind CSS. Users can explore and purchase various
                perfume products. The platform stands out with its user-friendly
                interface and fast performance, offering a dynamic shopping
                experience by leveraging the advantages provided by Next.js.
              </p>
            </div>
          </a>
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          {/* React.js */}
          <a
            href="/"
            className="group lg:flex sm:grid rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="">
              <img
                src="https://i.postimg.cc/hvHRD5Dr/Ads-z-tasar-m.png"
                alt="Shoes"
                className="rounded-xl w-34"
              />
            </figure>
            <div className="grid px-4 max-w-lg">
              <div className="flex justify-between flex-col sm:flex-row">
                <h2 className={`mb-2 text-md font-semibold`}>Gamma Studio</h2>
                <div className="flex relative justify-center sm:justify-start">
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <span className="bg-blue-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      React.js
                    </span>

                    <span className="bg-red-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Node.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Express.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      MongoDB
                    </span>
                  </span>
                </div>
              </div>
              <p className={`m-0 text-[10px] tracking-widest opacity-50`}>
                Gamma Studio is the company's promotional website, enabling
                users to access their desired metaverse spaces. The platform,
                developed using React, Node.js, and Express.js, stores its data
                in MongoDB and leverages Google Cloud infrastructure for high
                performance and reliability.
              </p>
            </div>
          </a>
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          {/* React.js */}
          <a
            href="/"
            className="group lg:flex sm:grid flex-row-reverse rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="">
              <img
                src="https://i.postimg.cc/Tw0HNH5w/Ads-z-tasar-m-1.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="grid px-4 max-w-lg">
              <div className="flex justify-between flex-col sm:flex-row">
                <h2 className={`mb-2 text-md font-semibold`}>Gamma Universe</h2>
                <div className="flex relative justify-center sm:justify-start">
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <span className="bg-blue-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      React.js
                    </span>

                    <span className="bg-red-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Node.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Express.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-[9px] font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      MongoDB
                    </span>
                  </span>
                </div>
              </div>
              <p className={`m-0 text-[10px] tracking-widest opacity-50`}>
                Gamma Universe is an overarching website encompassing all of
                Gamma company's platforms and websites. It's built using
                React.js, Node.js, and Express.js, with MongoDB serving as the
                database solution.
              </p>
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
