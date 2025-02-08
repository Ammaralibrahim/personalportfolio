"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
       <Link 
          href="/cv" 
          target="_blank" 
          className="text-gray-400 place-items-center underline cursor-pointer hover:text-white text-center text-1xl drop-shadow-lg font-thin animate-bounce mx-2"
        >
          CV
        </Link>
        <Link 
          href="/projects" 
          className="text-gray-400 place-items-center underline cursor-pointer hover:text-white text-center text-1xl drop-shadow-lg font-thin mx-2"
        >
          Projects
        </Link>
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
    <h2 className="mb-2 text-xl font-semibold">
      React.js
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
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
    <h2 className="mb-2 text-xl font-semibold">
      Next.js
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
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
    <h2 className="mb-2 text-xl font-semibold">
      Node.js
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
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
    <h2 className="mb-2 text-xl font-semibold">
      Express.js
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
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
    <h2 className="mb-2 text-xl font-semibold">
      Nest.js
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
      A progressive Node.js framework for building efficient, reliable,
      and scalable server-side applications. Utilizes TypeScript and
      follows the MVC pattern.
    </p>
  </a>

  {/* Angular */}
  <a
    href="/"
    className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className="mb-2 text-xl font-semibold">
      Angular
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
      A platform for building mobile and desktop web applications. Offers
      a rich set of tools and components for rapid development.
    </p>
  </a>

  {/* NgRx */}
  <a
    href="/"
    className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className="mb-2 text-xl font-semibold">
      NgRx
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
      Reactive state management for Angular applications. Utilizes Redux
      principles to manage global state.
    </p>
  </a>

  {/* Nx.dev */}
  <a
    href="/"
    className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className="mb-2 text-xl font-semibold">
      Nx.dev
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
      A powerful set of extensible dev tools for monorepos, providing
      advanced capabilities for Angular and other frameworks.
    </p>
  </a>

  {/* MongoDB */}
  <a
    href="/"
    className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className="mb-2 text-xl font-semibold">
      MongoDB
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
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
    <h2 className="mb-2 text-xl font-semibold">
      MySQL
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
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
    <h2 className="mb-2 text-xl font-semibold">
      Tailwind CSS
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
      A utility-first CSS framework for building modern web applications.
      Simplifies styling with reusable classes.
    </p>
  </a>

  {/* Docker */}
  <a
    href="/"
    className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className="mb-2 text-xl font-semibold">
      Docker
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
    </h2>
    <p className="m-0 max-w-[35ch] text-xs tracking-widest opacity-50">
      A platform for developing, shipping, and running applications in
      containers. Ensures consistency across environments.
    </p>
  </a>
</div>

    </main>
  );
}
