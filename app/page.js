"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-12">
      <div className="flex">
        <div className="text-gray-400 place-items-center underline cursor-pointer hover:text-white text-center text-1xl drop-shadow-lg font-thin animate-bounce mx-2">
          CV
        </div>
        <div
          className="text-gray-400 place-items-center underline cursor-pointer hover:text-white text-center text-1xl drop-shadow-lg font-thin animate-bounce mx-2"
          onClick={openModal}
        >
          Projects
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
        
        <div className="bg-gray-600 p-6 lg:h-1/2 lg:w-1/2 md:w-3/4 sm:w-full rounded-lg z-50">
  <div className="text-white w-0 cursor-pointer float-right px-4" onClick={closeModal}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" fill="white">
      <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
    </svg>
  </div>

  {/* Modal içeriği buraya eklenebilir */}
  <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
    <p className="underline text-sky-400">Gamma Cities.</p>
    <p className="underline text-sky-400">Gamma Studio.</p>
    <p className="underline text-sky-400">Gamma Universe.</p>
    <p className="underline text-sky-400">Reyhana Perfumes.</p>
  </div>
</div>

        </div>
      )}

      <div className="flex py-7">
        <div className="animate-pulse">
          <Link legacyBehavior href="https://github.com/Ammaralibrahim">
            <a target="_blank" rel="noopener noreferrer">
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="white"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.308,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15,C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>

      <div className="relative grid before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] ">
        <div className="text-6xl font-bold text-center">Ammar Alibrahim</div>

        <div className="text-gray-400 place-items-center text-center text-1xl drop-shadow-lg font-thin">
          <span className="text-white">Full-Stack</span> Developer
        </div>
        <div className="text-gray-400 place-items-center text-center text-sm drop-shadow-lg font-thin max-w-xl">
          &ldquo;Hello, I&apos;m Ammar Alibrahim, a 16-year-old{" "}
          <span className="text-white">Full-Stack</span> web developer. I&apos;m
          passionate about creating innovative and user-friendly web
          applications using the power of web technologies&rdquo;
        </div>
      </div>

      <div className="text-gray-400 place-items-center underline text-center text-1xl drop-shadow-lg font-thin py-8">
        Skills
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-6 lg:text-left">
        {/* React.js */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            React.js
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`m-0 max-w-[35ch] text-[10px] tracking-widest opacity-50`}
          >
            A JavaScript library for building user interfaces. Component-based
            development. Enhances performance using a virtual DOM.
          </p>
        </a>

        {/* Next.js */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            Next.js
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`m-0 max-w-[35ch] text-[10px] tracking-widest opacity-50`}
          >
            A React-based framework. Supports server-rendering (SSR) and static
            site generation (SSG). Provides file-based routing.
          </p>
        </a>

        {/* Node.js */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            Node.js
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`m-0 max-w-[35ch] text-[10px] tracking-widest opacity-50`}
          >
            Used to run server-side JavaScript. Features a fast and event-driven
            runtime. Boasts a vast module ecosystem.
          </p>
        </a>

        {/* Express.js */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            Express.js
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`m-0 max-w-[35ch] text-[10px] tracking-widest opacity-50`}
          >
            A fast and minimal web application framework for Node.js. Built on a
            middleware-based architecture. Convenient for creating APIs and
            server applications.
          </p>
        </a>
        {/* Nest.js */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            Nest.js
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`m-0 max-w-[35ch] text-[10px] tracking-widest opacity-50`}
          >
            A progressive Node.js framework for building efficient, reliable,
            and scalable server-side applications. Utilizes TypeScript and
            follows the MVC pattern.
          </p>
        </a>

        {/* MongoDB */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            MongoDB
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`m-0 max-w-[35ch] text-[10px] tracking-widest opacity-50`}
          >
            A NoSQL database. Uses a JSON-like BSON document format. Provides
            flexible and scalable data storage.
          </p>
        </a>

        {/* MySQL */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            MySQL
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`m-0 max-w-[35ch] text-[10px] tracking-widest opacity-50`}
          >
            A relational database management system (RDBMS). Stores and queries
            data with tables and relationships. Offers ACID compliance.
          </p>
        </a>

        {/* Tailwind CSS */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            Tailwind CSS
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`m-0 max-w-[35ch] text-[10px] tracking-widest opacity-50`}
          >
            A utility-first CSS framework for building modern web applications.
            Simplifies styling with reusable classes.
          </p>
        </a>

        {/* Bootstrap */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            Bootstrap
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`m-0 max-w-[35ch] text-[10px] tracking-widest opacity-50`}
          >
            A popular front-end framework for building responsive and consistent
            web designs. Comes with pre-designed components and styles.
          </p>
        </a>

        {/* Material UI */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            Material UI
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`m-0 max-w-[35ch] text-[10px] tracking-widest opacity-50`}
          >
            A popular React component library that follows the Material Design
            guidelines. Offers ready-made UI components for modern web
            applications.
          </p>
        </a>
        {/* Git */}
        <a
          href="/"
          className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl font-semibold`}>
            Git
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
          </h2>
          <p
            className={`m-0 max-w-[35ch] text-[10px] tracking-widest opacity-50`}
          >
            A distributed version control system for tracking changes in source
            code. Facilitates collaboration and code management.
          </p>
        </a>
      </div>
    </main>
  );
}
