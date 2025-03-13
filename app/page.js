"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-16 lg:p-24 pt-12">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/projects"
          className="text-gray-400 underline cursor-pointer hover:text-white text-center text-base sm:text-lg drop-shadow-lg font-thin mx-2"
        >
          Projects
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex py-7 gap-4">
        <div className="animate-pulse">
          <Link href="https://github.com/Ammaralibrahim">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="white"
            >
              {/* GitHub SVG Path */}
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.308,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15,C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </Link>
        </div>
        {/* Other social links remain unchanged */}
      </div>

      {/* Hero Section */}
      <div className="relative grid before:absolute before:h-[200px] sm:before:h-[300px] before:w-[300px] sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] sm:after:h-[180px] after:w-[160px] sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
          Ammar Alibrahim
        </div>
        <div className="text-gray-400 text-center text-sm sm:text-base md:text-lg drop-shadow-lg font-thin">
          <span className="text-white">Full-Stack</span> Developer
        </div>
        <div className="text-gray-400 text-center text-xs sm:text-sm md:text-base drop-shadow-lg font-thin max-w-xs sm:max-w-md md:max-w-xl">
          I&apos;m <span className="text-white">Ammar Alibrahim</span>, a Full-Stack web developer skilled in{" "}
          <span className="text-white">React.js, Next.js, Node.js, Nest.js</span>, and more. I build scalable web applications using modern frameworks and databases like{" "}
          <span className="text-white">MongoDB</span> and <span className="text-white">MySQL</span>. Passionate about clean code, performance, and multilingual development.
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-gray-400 underline text-center text-base sm:text-lg md:text-xl drop-shadow-lg font-thin py-8">
        Skills
      </div>
      <div className="mb-16 sm:mb-32 grid text-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 lg:max-w-5xl lg:w-full lg:mb-0">
        {/* TypeScript */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">TypeScript</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A typed superset of JavaScript. Enhances code reliability and scalability with static typing.
          </p>
        </a>

        {/* React.js */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">React.js</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A JavaScript library for building user interfaces. Component-based with virtual DOM for performance.
          </p>
        </a>

        {/* Next.js */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">Next.js</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A React framework with SSR and SSG. Simplifies routing and performance optimization.
          </p>
        </a>

        {/* Node.js */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">Node.js</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            Server-side JavaScript runtime. Fast, event-driven, and backed by a vast ecosystem.
          </p>
        </a>

        {/* Nest.js */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">Nest.js</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A TypeScript-based Node.js framework. Scalable, reliable, and follows MVC patterns.
          </p>
        </a>

        {/* Express.js */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">Express.js</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A minimal Node.js framework. Middleware-based for fast API and server development.
          </p>
        </a>

        {/* MongoDB */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">MongoDB</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A NoSQL database with JSON-like documents. Flexible and scalable for modern apps.
          </p>
        </a>

        {/* MySQL */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">MySQL</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A relational database with tables and ACID compliance. Ideal for structured data.
          </p>
        </a>

        {/* Tailwind CSS */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">Tailwind CSS</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A utility-first CSS framework. Streamlines styling with reusable classes.
          </p>
        </a>

        {/* Framer Motion */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">Framer Motion</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A React library for animations. Simplifies complex transitions and gestures.
          </p>
        </a>

        {/* GSAP */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">GSAP</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A JavaScript animation library. Offers precise control for web animations.
          </p>
        </a>

        {/* Docker */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">Docker</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A containerization platform. Ensures consistency across development and production.
          </p>
        </a>

        {/* Angular */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">Angular</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            A platform for building web apps. Rich tools for rapid, structured development.
          </p>
        </a>

        {/* NgRx */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">NgRx</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            Reactive state management for Angular. Uses Redux principles for global state.
          </p>
        </a>

        {/* Nx.dev */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-2 text-lg sm:text-xl font-semibold">Nx.dev</h2>
          <p className="m-0 max-w-[35ch] text-xs sm:text-sm tracking-widest opacity-50 text-left">
            Dev tools for monorepos. Enhances Angular and other frameworks with advanced features.
          </p>
        </a>
      </div>
    </main>
  );
}