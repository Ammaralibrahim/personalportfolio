import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "Ammar Alibrahim",
  description:
    "“Hello, Im Ammar Alibrahim, a 16-year-old Full-Stack web developer. Im passionate about creating innovative and user-friendly web applications using the power of web technologies”",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        {children}
        <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow flex items-center justify-center md:p-6 dark:bg-transparent dark:border-transparent">
          <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Ammar Alibrahim™
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </body>
    </html>
  );
}
