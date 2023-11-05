export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex"></div>

      <div className="relative grid before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] ">
        <div className="text-6xl font-bold text-center">Ammar Alibrahim</div>

        <div className="text-gray-400 place-items-center text-center text-1xl drop-shadow-lg font-thin">
          <span className="text-white">Full-Stack</span> Developer
        </div>
        <div className="text-gray-400 place-items-center text-center text-sm drop-shadow-lg font-thin max-w-xl">
  &ldquo;Hello, I'm Ammar Alibrahim, a 16-year-old
  <span className="text-white">Full-Stack</span> web developer. I'm
  passionate about creating innovative and user-friendly web
  applications using the power of web technologies&rdquo;
</div>
      </div>

      <div className="text-gray-400 place-items-center text-center text-1xl drop-shadow-lg font-thin py-8">
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
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
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
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
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
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
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
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            </span>
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
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
             
            </span>
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
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
             
            </span>
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
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
             
            </span>
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
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
             
            </span>
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
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
             
            </span>
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
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
             
            </span>
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
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
             
            </span>
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
