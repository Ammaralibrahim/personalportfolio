import React from "react";
import Link from "next/link";
import gammastudio from "@/public/gammastudio.png";
import Image from "next/image";
import Gammacities from "./gammacities.png";
import Gammastudio from "./gammastudio.png";
import Reyhanaperfumes from "./reyhana-perfumes.png";
import Gammauniverse from "./gammauniverse.png";
import Gammaassets from "./gammaassets.png";
import BrightEdu from "./brightedu.png";

export default function Project() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24 px-32 pt-12 min-h-screen">
        <div className="flex relative">
          <div className="text-gray-400 place-items-center underline cursor-pointer hover:text-white text-center text-1xl drop-shadow-lg font-thin animate-bounce mx-2">
            {/* <Link href="/cv" target="_blank">
              {" "}
              CV{" "}
            </Link> */}
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
          <div div className="animate-pulse ml-1">
            <Link href="mailto:ammaryasir8088@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="white"
              >
                <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
              </svg>
            </Link>
          </div>
          <div div className="animate-pulse ml-1">
            <Link href="https://wa.me/+905518530350?text=Hi">
              <svg
                className="ml-1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
                fill="white"
              >
                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-gray-400 place-items-center underline text-center text-1xl drop-shadow-lg font-thin py-8">
          Projects
        </div>
        <a href="https://gammacities.com" target="_blank">
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
            <div className="group lg:flex sm:grid rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <div className="grid px-4 max-w-lg">
                <div className="flex justify-between flex-col sm:flex-row">
                  <h2 className="mb-2 text-md font-semibold">Gamma Cities</h2>
                  <div className="flex relative justify-center sm:justify-start">
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none max-w-xs">
                      <span className="bg-blue-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                        React.js
                      </span>

                      <span className="bg-red-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                        Node.js
                      </span>
                      <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                        Express.js
                      </span>
                      <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                        MongoDB
                      </span>
                    </span>
                  </div>
                </div>

                <p className="m-0 text-xs tracking-widest opacity-50">
                  Gamma Cities is a platform providing a virtual metaverse
                  experience, allowing users to explore diverse online spaces.
                  Developed with technologies such as React.js and Three.js, the
                  platform offers users a gaming-like immersion. It utilizes
                  Node.js, Express, and Google Cloud for data storage, ensuring
                  secure retention of user interactions.
                </p>
              </div>
              <figure className="">
                <Image
                  src={Gammacities} // Update with your image path
                  alt="CV 1"
                  width={600} // Adjust width and height according to your image
                  height={400}
                  className="rounded-xl"
                />
              </figure>
            </div>
          </div>
        </a>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          {/* React.js */}
          <a
            href="https://gammaassets.com/" // Updated link
            className="group lg:flex sm:grid rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="">
              <Image
                src={Gammaassets} // Update with your image path
                alt="GammaAssets" // Updated alt text
                width={600} // Adjust width and height according to your image
                height={400}
                className="rounded-xl"
              />
            </figure>
            <div className="grid px-4 max-w-lg">
              <div className="flex justify-between flex-col sm:flex-row">
                <h2 className="mb-2 text-md font-semibold">GammaAssets</h2>{" "}
                {/* Project name updated */}
                <div className="flex relative justify-center sm:justify-start">
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <span className="bg-blue-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Next.js
                    </span>

                    <span className="bg-red-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Node.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Express.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      MongoDB
                    </span>
                  </span>
                </div>
              </div>
              <p className="m-0 text-xs tracking-widest opacity-50">
                GammaAssets is a platform supported by blockchain technology
                that enables users to purchase shares and invest in real estate
                within metaverse environments. Developed using React, Node.js,
                and Express.js, it stores its data in MongoDB and leverages
                Google Cloud infrastructure for high performance and
                reliability.
              </p>
            </div>
          </a>
        </div>



        <div className="mb-32 grid  text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          {/* React.js */}
          <a
            href="https://brightedu.vercel.app/"
            className="group lg:flex sm:grid flex-row-reverse rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="">
              <Image
                src={BrightEdu} // Update with your image path
                alt="brightedu"
                width={600} // Adjust width and height according to your image
                height={400}
                className="rounded-xl"
              />
            </figure>
            <div className="grid px-4 max-w-lg">
              <div className="flex justify-between flex-col sm:flex-row">
                <h2 className="mb-2 text-md font-semibold">BrightEdu</h2>
                <div className="flex relative justify-center sm:justify-start">
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <span className="bg-blue-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Next.js
                    </span>

                    
                    <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Tailwind CSS
                    </span>
                    <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Framer Motion
                    </span>
                    <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Parallax
                    </span>
                  </span>
                </div>
              </div>
              <p className="m-0 text-xs tracking-widest opacity-50">
                This landing page is designed to provide a fast, interactive,
                and visually appealing user experience. Developed with Next.js,
                Tailwind CSS, and Framer Motion, the page ensures seamless
                performance and responsiveness across all devices. Built with a
                modular and scalable architecture, the landing page incorporates
                Shadcn/UI components for a polished and user-friendly interface.
                Animations powered by Framer Motion enhance engagement, while
                Next.js&apos;s server-side rendering (SSR) and incremental static
                regeneration (ISR) optimize load times and SEO performance. With
                lazy loading and optimized images, the page maintains high
                performance. Integrated Next.js API routes enable efficient form
                submissions and data handling, ensuring smooth interaction
                between users and the backend.
              </p>
            </div>
          </a>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          {/* React.js */}
          <a
            href="https://www.gammauniverse.io/"
            className="group lg:flex sm:grid flex-row-reverse rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <div className="grid px-4 max-w-lg">
              <div className="flex justify-between flex-col sm:flex-row">
                <h2 className="mb-2 text-md font-semibold">Gamma Universe</h2>
                <div className="flex relative justify-center sm:justify-start">
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <span className="bg-blue-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      React.js
                    </span>

                    <span className="bg-red-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Node.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Express.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      MongoDB
                    </span>
                  </span>
                </div>
              </div>
              <p className="m-0 text-xs tracking-widest opacity-50">
                Gamma Universe is an overarching website encompassing all of
                Gamma company&apos;s platforms and websites. It&apos;s built
                using React.js, Node.js, and Express.js, with MongoDB serving as
                the database solution.
              </p>
            </div>
            <figure className="">
              <Image
                src={Gammauniverse} // Update with your image path
                alt="CV 1"
                width={600} // Adjust width and height according to your image
                height={400}
                className="rounded-xl"
              />
            </figure>
          </a>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          {/* React.js */}
          <a
            href="https://gammastudio.io"
            className="group lg:flex sm:grid rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            

            <div className="grid px-4 max-w-lg">
              <div className="flex justify-between flex-col sm:flex-row">
                <h2 className="mb-2 text-md font-semibold">Gamma Studio</h2>
                <div className="flex relative justify-center sm:justify-start">
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <span className="bg-blue-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      React.js
                    </span>

                    <span className="bg-red-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Node.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Express.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      MongoDB
                    </span>
                  </span>
                </div>
              </div>
              <p className="m-0 text-xs tracking-widest opacity-50">
                Gamma Studio is the company&apos;s promotional website, enabling
                users to access their desired metaverse spaces. The platform,
                developed using React, Node.js, and Express.js, stores its data
                in MongoDB and leverages Google Cloud infrastructure for high
                performance and reliability.
              </p>
            </div>
            <figure className="">
              <Image
                src={Gammastudio} // Update with your image path
                alt="CV 1"
                width={600} // Adjust width and height according to your image
                height={400}
                className="rounded-xl"
              />
            </figure>
          </a>
        </div>

        <div className="mb-32 grid  text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          {/* React.js */}
          <a
            href="https://reyhana-perfumes.vercel.app/"
            className="group lg:flex sm:grid flex-row-reverse rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <div className="grid px-4 max-w-lg">
              <div className="flex justify-between flex-col sm:flex-row">
                <h2 className="mb-2 text-md font-semibold">Reyhana perfumes</h2>
                <div className="flex relative justify-center sm:justify-start">
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <span className="bg-blue-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      React.js
                    </span>

                    <span className="bg-red-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Next.js
                    </span>
                    <span className="bg-green-100 text-gray-800 text-xs font-medium me-1.5 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400">
                      Tailwind CSS
                    </span>
                  </span>
                </div>
              </div>
              <p className="m-0 text-xs tracking-widest opacity-50">
                Reyhana Perfumes is an online shopping platform developed using
                Next.js and Tailwind CSS. Users can explore and purchase various
                perfume products. The platform stands out with its user-friendly
                interface and fast performance, offering a dynamic shopping
                experience by leveraging the advantages provided by Next.js.
              </p>
            </div>
            <figure className="">
              <Image
                src={Reyhanaperfumes} // Update with your image path
                alt="CV 1"
                width={600} // Adjust width and height according to your image
                height={400}
                className="rounded-xl"
              />
            </figure>
          </a>
        </div>

       
      </main>
    </>
  );
}
