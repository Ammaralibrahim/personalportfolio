import React from 'react'

export default function Profile() {
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
    <div className="relative flex items-center gap-x-4">
      <img
        src="/images/avatar.jpg"
        alt=""
        className="h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"
      />
      <div className="text-sm leading-6">
        <p className="font-semibold text-primary dark:text-white">
          <a href="#">
            <span className="absolute inset-0" />
            Michael Andreuzza
          </a>
        </p>
        <p className="text-zinc-500 dark:text-zinc-400">
          UI Design &amp; Web developer
        </p>
      </div>
    </div>
    <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
      Hey, welcome to my site!
    </p>
    <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
      I'm a digital designer, developer, and surfer from Malibu. In the
      digital world, I craft interfaces and dive into coding intricacies.
      <br />
      <br />
      Beyond screens, I find solace and joy riding waves along Malibu's
      shores. My life blends tech and nature, coding sessions, and catching
      waves.
    </p>
  </div>
  )
}
